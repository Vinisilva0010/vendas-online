# Zanvexis 
## Especificação Técnica Completa — v1.0

---

## O que é este projeto

Um agregador de Funding Rate em tempo real que conecta simultaneamente três exchanges via WebSocket diretamente no browser do usuário: **Drift Protocol** (Solana DEX), **Hyperliquid** (L1 DEX) e **Binance** (CEX). O objetivo é mostrar, em tempo real, onde está a maior distorção de taxa entre as exchanges, calculando o APY anualizado de cada mercado. Isso dá ao trader a informação necessária para montar carry trades e posições delta-neutral de forma rápida e informada.

**Sem backend. Sem login. Sem wallet connect. Sem servidor custando dinheiro.**
Todo o cálculo e toda a conexão acontecem no browser do visitante.

---

## Stack final com versões

| Tecnologia | Versão | Por quê |
|---|---|---|
| Next.js | 15.5 (App Router) | Versão mais recente estável. App Router é obrigatório para usar Server Components onde necessário. |
| TypeScript | 5.x (vem com Next.js 15) | Tipagem forte é mandatória para código financeiro. |
| Zustand | 5.0.13 | Gerenciamento de estado com suporte a Transient Updates, essencial para não travar o React com dados de alta frequência. |
| Tailwind CSS | 4.x | Compatível com Next.js 15. UI rápida de construir, coerente com o visual da Zanvexis. |
| @drift-labs/sdk-browser | 2.135.0-beta (ou latest) | Versão específica para browser. Permite deserializar o estado das contas do Drift Protocol sem precisar de wallet. Use `@drift-labs/sdk-browser`, NÃO `@drift-labs/sdk`, que tem dependências Node.js e quebra no browser. |
| @solana/web3.js | v2 (latest) | Necessário para a conexão RPC com Helius e para ler contas do Drift on-chain. |
| Helius RPC | Developer Plan (free) | Endpoint Solana com WebSocket confiável. O free tier do Helius aguenta o projeto inteiro sem custo. |

**Dependências externas de API (sem custo, sem auth):**
- Drift WebSocket de leitura: `wss://dlob.drift.trade/ws` (trades/orderbook) + Helius WebSocket para estado das contas
- Hyperliquid WebSocket: `wss://api.hyperliquid.xyz/ws` — público, sem auth, sem API key
- Binance Futures WebSocket: `wss://fstream.binance.com/ws/` — público, sem auth

---

## Mercados que vão ser monitorados (escopo inicial)

| Par | Drift | Hyperliquid | Binance |
|---|---|---|---|
| SOL | SOL-PERP | SOL | SOLUSDT |
| BTC | BTC-PERP | BTC | BTCUSDT |
| ETH | ETH-PERP | ETH | ETHUSDT |

Esses três pares existem nas três exchanges, o que permite comparação real. Não expanda para mais pares antes de ter os três funcionando com estabilidade.

---

## Como o APY é calculado por exchange

Esta parte é crítica. Cada exchange tem um intervalo de funding diferente. Para comparar lado a lado, tudo precisa ser convertido para APY anualizado usando a mesma base.

**Drift:**
- Funding é atualizado por hora (lazy update a cada trade ou forçado por hora)
- A taxa retornada é a taxa por hora como decimal (ex: `0.0000125` = 0.00125% por hora)
- Fórmula: `APY = lastFundingRate × 24 × 365`

**Hyperliquid:**
- Funding pago a cada hora, mas calculado com base na janela de 8 horas
- A taxa retornada no campo `funding` já é a taxa horária (1/8 da taxa de 8h)
- Fórmula: `APY = fundingRate × 24 × 365`

**Binance:**
- Funding pago a cada 8 horas (3 vezes por dia)
- A taxa retornada é a taxa do intervalo de 8h como decimal
- Fórmula: `APY = fundingRate × 3 × 365`

**Regra de sinal:**
- APY positivo → longs pagam shorts. Montar posição short na exchange e spot long em outro lugar captura esse yield.
- APY negativo → shorts pagam longs. Inverso.
- O Radar deve mostrar o sinal claramente, não esconder com valor absoluto.

---

## Arquitetura de dados no browser

O fluxo de dados funciona assim:

```
[WebSocket Drift/HL/Binance]
        ↓
  [Web Worker dedicado]
        ↓ (calcula APY, formata dados)
  [Zustand Store com Transient Updates]
        ↓ (useRef direto no DOM)
  [UI — sem re-render do React por tick]
```

**Por que Web Worker?**
Os três WebSockets podem disparar mensagens em alta frequência ao mesmo tempo. Se esse processamento rodar na thread principal do browser, a interface trava. O Web Worker isola tudo isso em uma thread separada.

**Por que Transient Updates do Zustand?**
Com `useState` ou até `zustand` normal, cada update de dados causa um re-render do React. A cada tick do WebSocket, o React recalcula o virtual DOM. Com Transient Updates, o Zustand atualiza diretamente uma referência (`useRef`) no DOM sem passar pelo ciclo do React. A UI mostra o número novo sem re-render. Isso é mandatório para dados financeiros em tempo real.

---

## Fase 1 — Projeto base e conexão Hyperliquid

**Objetivo:** Ter o projeto Next.js rodando com um WebSocket funcional, dados reais da Hyperliquid aparecendo na tela, e a estrutura de estado correta definida.

**Por que começar pela Hyperliquid?**
Porque é a conexão mais simples das três: um WebSocket público, sem dependências externas, sem SDK, sem RPC. Validar que tudo funciona antes de adicionar complexidade é a abordagem correta.

### O que fazer nesta fase

1. **Criar o projeto Next.js 15.5**
   - Usar `npx create-next-app@latest` com App Router, TypeScript e Tailwind habilitados
   - Remover todo o conteúdo padrão gerado pelo template
   - Configurar o `tsconfig.json` com `strict: true` obrigatório
   - Instalar Zustand 5: `npm i zustand`

2. **Definir os tipos TypeScript globais**
   - Criar o arquivo `src/types/funding.ts`
   - Nele, definir a interface `FundingData` que vai ser usada por todas as exchanges:
     ```
     exchange: 'drift' | 'hyperliquid' | 'binance'
     market: 'SOL' | 'BTC' | 'ETH'
     fundingRateRaw: number       // taxa original da exchange, sem conversão
     apyPercent: number           // APY já calculado e convertido para %
     nextFundingMs: number        // timestamp em ms do próximo funding
     lastUpdatedMs: number        // quando esse dado chegou no browser
     isStale: boolean             // true se o dado tem mais de 30s sem update
     ```
   - Definir também o tipo `FundingStore` que o Zustand vai gerenciar: um Map de `"exchange:market"` → `FundingData`

3. **Criar o Zustand store com Transient Updates**
   - Criar `src/store/fundingStore.ts`
   - O store deve ter:
     - `data`: objeto com todos os dados de funding atuais
     - `setFunding(key, data)`: função para atualizar um par específico
     - `subscribers`: lista de callbacks para Transient Updates (atualização direta no DOM sem re-render)
   - Implementar o padrão de subscription do Zustand: `subscribe((state) => state.data, callback)` para que componentes que precisam de alta frequência usem `useRef` e subscriptions manuais, não `useStore`

4. **Criar o Web Worker**
   - Criar `src/workers/fundingWorker.ts`
   - O Worker recebe mensagens brutas dos WebSockets (que serão iniciados dentro do próprio Worker)
   - O Worker processa os dados, calcula o APY, e posta o resultado de volta para a thread principal via `postMessage`
   - Inicializar o Worker no browser usando `new Worker(new URL('../workers/fundingWorker.ts', import.meta.url))` dentro de um `useEffect` com `'use client'`

5. **Implementar a conexão WebSocket da Hyperliquid dentro do Worker**
   - URL: `wss://api.hyperliquid.xyz/ws`
   - Mensagem de subscribe a ser enviada após conexão:
     ```json
     { "method": "subscribe", "subscription": { "type": "activeAssetCtx", "coin": "SOL" } }
     ```
   - Fazer o mesmo para BTC e ETH (três subscribes separados na mesma conexão)
   - O campo relevante na resposta é `ctx.funding` (taxa horária) e `ctx.nextFundingTime`
   - Calcular `APY = parseFloat(ctx.funding) × 24 × 365 × 100` para converter para percentual
   - Implementar reconexão automática com exponential backoff: começa com delay de 1s, dobra a cada falha, máximo de 30s

6. **Montar a UI básica (placeholder funcional)**
   - Criar `src/app/radar/page.tsx` como página Client Component
   - Instanciar o Worker no `useEffect`
   - Mostrar os dados que chegam em uma tabela simples sem estilização avançada ainda
   - O objetivo desta fase é ver os números reais aparecendo na tela e atualizando

**Critério de conclusão desta fase:**
Abrir a página `/radar` no browser e ver os APYs de SOL, BTC e ETH da Hyperliquid atualizando em tempo real, sem travar a UI, sem erros no console.

---

## Fase 2 — Conexão Binance

**Objetivo:** Adicionar a segunda fonte de dados ao Worker existente.

### O que fazer nesta fase

1. **Adicionar subscribe de Binance Futures no Web Worker**
   - URL base: `wss://fstream.binance.com/ws/`
   - Para assinar funding de múltiplos pares em uma conexão só, usar stream combinado:
     `wss://fstream.binance.com/stream?streams=solusdt@markPrice/btcusdt@markPrice/ethusdt@markPrice`
   - Cada mensagem retorna um objeto com:
     - `r`: funding rate atual (taxa de 8h)
     - `T`: timestamp do próximo funding em ms
     - `s`: símbolo (ex: `SOLUSDT`)
   - Calcular `APY = parseFloat(r) × 3 × 365 × 100`
   - Mapear o símbolo da Binance para o market interno: `SOLUSDT` → `SOL`, etc.

2. **Atualizar o Zustand store com os dados da Binance**
   - A lógica é idêntica à Hyperliquid: o Worker posta a mensagem, a thread principal atualiza o store
   - Garantir que as chaves do store sejam `"binance:SOL"`, `"binance:BTC"`, `"binance:ETH"` e que não colidam com `"hyperliquid:SOL"` etc.

3. **Atualizar a UI para mostrar Binance ao lado de Hyperliquid**
   - Ainda sem estilização final, mas a estrutura da tabela comparativa deve começar a aparecer aqui

**Critério de conclusão desta fase:**
Dados de Binance e Hyperliquid aparecendo lado a lado, atualizando de forma independente, sem que a queda de um WebSocket derrube o outro.

**Teste de resiliência obrigatório nesta fase:**
Fechar a aba por 30 segundos, reabrir e verificar que os dois WebSockets reconectam sozinhos. Testar throttling de rede no DevTools (slow 3G) e verificar que o exponential backoff funciona corretamente.

---

## Fase 3 — Conexão Drift Protocol

**Objetivo:** Adicionar a terceira e mais complexa fonte de dados.

Esta fase é a mais delicada. Drift usa Solana on-chain, então a conexão não é um WebSocket simples — é uma subscription de conta via RPC.

### O que fazer nesta fase

1. **Criar conta no Helius e pegar o endpoint RPC**
   - Entrar em helius.dev, criar conta gratuita (Developer Plan)
   - Pegar a URL do endpoint no formato: `https://mainnet.helius-rpc.com/?api-key=SUA_KEY`
   - A versão WebSocket fica: `wss://mainnet.helius-rpc.com/?api-key=SUA_KEY`
   - Colocar a key no arquivo `.env.local` como `NEXT_PUBLIC_HELIUS_KEY=suakey`
   - Importante: `NEXT_PUBLIC_` é necessário porque o Worker roda no browser e precisa acessar a variável. Isso é aceitável porque a Helius Developer key não é sensível — é uma chave de leitura pública.

2. **Instalar o SDK do Drift para browser**
   - Executar: `npm i @drift-labs/sdk-browser @solana/web3.js`
   - Confirmar que está instalando `@drift-labs/sdk-browser` e NÃO `@drift-labs/sdk`

3. **Configurar a conexão de leitura do Drift no Worker**
   - Criar uma `Connection` do `@solana/web3.js` usando o endpoint Helius
   - Instanciar o `DriftClient` do SDK em modo read-only (sem keypair, sem wallet):
     ```
     const driftClient = new DriftClient({
       connection,
       wallet: undefined,  // leitura pura, sem wallet
       env: 'mainnet-beta',
       accountSubscription: { type: 'websocket' }
     })
     ```
   - Chamar `driftClient.subscribe()` para iniciar o WebSocket de estado
   - O SDK vai manter as contas dos mercados perp sincronizadas automaticamente

4. **Extrair o Funding Rate dos mercados do Drift**
   - Após o subscribe, usar `driftClient.getPerpMarketAccount(marketIndex)` para obter o estado atual
   - Os índices dos mercados: SOL-PERP = 0, BTC-PERP = 1, ETH-PERP = 2
   - O campo relevante na conta é `amm.lastFundingRate` (tipo `BN` — BigNumber)
   - Converter para número: usar a função `convertToNumber` do SDK com a precisão correta
   - A precisão do funding rate no Drift é `FUNDING_RATE_PRECISION` (10^9), exportado do SDK
   - Fórmula completa: `apyPercent = (lastFundingRate / FUNDING_RATE_PRECISION) × 24 × 365 × 100`
   - Para escutar updates em tempo real (não só o estado inicial), usar o EventSubscriber do SDK:
     ```
     const eventSubscriber = new EventSubscriber(connection, driftClient.program, {
       eventTypes: ['FundingRateRecord'],
       logProviderConfig: { type: 'websocket' }
     })
     ```
   - Cada evento `FundingRateRecord` contém `fundingRate` como BN e o `marketIndex`

5. **Tratar o caso de mercado sem update recente**
   - O Drift atualiza o funding de forma lazy (só atualiza quando há trade). Se um mercado ficar sem trades por mais de 20 minutos, o funding pode estar desatualizado.
   - Verificar o campo `amm.lastFundingRateTs` (timestamp do último update) e marcar `isStale: true` se tiver mais de 90 minutos sem update.

**Critério de conclusão desta fase:**
As três exchanges aparecem na tabela com APYs atualizando de forma independente. O Drift pode ter updates menos frequentes que os outros dois — isso é normal e esperado.

---

## Fase 4 — Interface final e lógica de comparação

**Objetivo:** Transformar a tabela funcional em uma interface digna de estar na vitrine da Zanvexis.

### O que fazer nesta fase

1. **Implementar a lógica de comparação entre exchanges**
   - Para cada par de mercado (SOL, BTC, ETH), calcular o spread de APY entre as exchanges
   - Identificar qual exchange paga mais para cada lado (long/short)
   - Destacar visualmente os maiores spreads — é exatamente o que um trader de carry quer ver primeiro

2. **Implementar o indicador de "oportunidade"**
   - Definir um threshold de spread que seja considerado interessante (sugestão: diferença de APY > 5% ao ano entre duas exchanges)
   - Quando o spread ultrapassa o threshold, destacar a linha visualmente
   - Não chamar de "sinal de compra" nem nada que implique recomendação de trade — apenas "spread > 5%"

3. **Construir a UI no padrão visual da Zanvexis**
   - Terminal aesthetic, fundo escuro, fonte monospace para os números
   - Tabela com colunas: Mercado | APY Drift | APY Hyperliquid | APY Binance | Spread Máximo | Próximo Funding
   - Os números devem piscar suavemente (CSS transition, não JS) quando recebem update
   - Indicador de status de conexão por exchange (verde/vermelho/amarelo para reconectando)
   - Contador de tempo desde o último update por exchange

4. **Implementar Transient Updates corretamente**
   - Para os números de APY que atualizam em alta frequência, usar o padrão:
     - O componente de número recebe uma `ref` para o elemento DOM
     - O Zustand `subscribe` atualiza o `ref.current.textContent` diretamente
     - O React nunca re-renderiza para esses números específicos
   - Para elementos menos frequentes (status de conexão, próximo funding), `useState` normal é aceitável

5. **Adicionar disclaimer obrigatório**
   - Texto fixo no rodapé da ferramenta: "Esta ferramenta é informativa. Os dados são de fontes públicas e podem ter latência. Não constitui recomendação de investimento."
   - Sem isso você cria exposição desnecessária.

**Critério de conclusão desta fase:**
A ferramenta está visualmente coerente com o site da Zanvexis, os dados atualizam sem travar, e um trader consegue entender em menos de 5 segundos onde está a maior distorção de funding.

---

## Fase 5 — Polimento, testes e deploy

**Objetivo:** Deixar pronto para colocar no ar.

### O que fazer nesta fase

1. **Testes de funcionalidade (TDV)**
   - Simular queda de cada WebSocket individualmente e verificar que os outros continuam funcionando
   - Testar em conexão lenta (DevTools → Network throttling)
   - Abrir 3 abas simultâneas e verificar que não há degradação de performance
   - Testar em mobile (o layout precisa ser legível em tela pequena)
   - Verificar consumo de memória após 30 minutos de uso: abrir DevTools → Memory, tirar snapshot, esperar 30 min, tirar outro snapshot. Não deve haver crescimento significativo de heap (vazamento de memória via listeners não removidos é o risco aqui)

2. **Verificar cleanup correto de recursos**
   - No `useEffect` que instancia o Worker, o retorno (cleanup) deve chamar `worker.terminate()`
   - Dentro do Worker, ao receber mensagem de encerramento, fechar todos os WebSockets com `ws.close()`
   - No DriftClient, chamar `driftClient.unsubscribe()` ao fechar

3. **Configurar variáveis de ambiente para produção na Vercel**
   - No dashboard da Vercel, em Settings → Environment Variables, adicionar `NEXT_PUBLIC_HELIUS_KEY`
   - Nunca commitar o `.env.local` no repositório

4. **Deploy na Vercel**
   - `vercel --prod` ou conectar o repositório no dashboard da Vercel para deploy automático
   - Verificar que a página `/radar` carrega corretamente em produção
   - Testar os WebSockets em produção (comportamento de WebSocket pode diferir de localhost)

5. **Adicionar a ferramenta no site da Zanvexis**
   - Criar um link visível no nav ou na seção de projetos apontando para `/radar`
   - Escrever uma descrição curta e honesta do que a ferramenta faz — sem hype, sem "alpha", sem promessas
   - Exemplo de descrição boa: "Funding Rate Radar — acompanhe em tempo real as taxas de financiamento de SOL, BTC e ETH no Drift, Hyperliquid e Binance. Dados direto das APIs públicas, calculados no seu browser."

---

## Riscos conhecidos e como mitigar

**WebSocket da Binance tem rate limit de conexões por IP.**
Mitigation: usar stream combinado (um único WebSocket para múltiplos pares) em vez de um WebSocket por par. Já está especificado assim acima.

**O SDK do Drift para browser ainda está em beta.**
Mitigation: fixar a versão no `package.json` com `"@drift-labs/sdk-browser": "2.135.0-beta.8"` (ou a mais recente estável no momento que você instalar). Não usar `^` no semver para não pegar breaking changes automaticamente.

**Dados podem ficar desatualizados sem o usuário perceber.**
Mitigation: o campo `isStale` e o indicador de status por exchange resolvem isso. Mostrar o tempo desde o último update claramente na UI.

**Helius free tier tem limite de requests/segundo.**
Mitigation: como você está usando WebSocket subscription (não polling), o consumo de créditos é muito menor. Um WebSocket aberto conta como uma requisição por reconexão, não por mensagem recebida.

---

## Ordem de implementação resumida

1. Projeto Next.js + tipos TypeScript + Zustand store estruturado
2. Web Worker com Hyperliquid WebSocket funcionando
3. Adicionar Binance no Worker
4. Adicionar Drift no Worker (mais complexo, deixar por último nos sources)
5. UI final com comparação e visual da Zanvexis
6. Testes, cleanup e deploy
