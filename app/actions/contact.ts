"use server";

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const entityId = formData.get("entityId");
    const channel = formData.get("channel");
    const operation = formData.get("operation");
    const payload = formData.get("payload");

    // 1. Validação estrita de servidor
    if (!entityId || !channel || !operation || !payload) {
      return { status: "ERROR", message: "MISSING_PARAMETERS" };
    }

    // 2. Montagem do pacote de dados formatado
    const message = `
🚨 *NOVO LEAD: TERMINAL ZANVEXIS* 🚨

👤 *Entity:* ${entityId}
🔗 *Channel:* ${channel}
⚙️ *Operation:* ${operation}

📄 *Payload:*
${payload}
    `;

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Faltam variáveis de ambiente do Telegram.");
      return { status: "ERROR", message: "INTERNAL_SERVER_ERROR" };
    }

    // 3. Comunicação Segura Servidor-para-Servidor
    const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;
    
    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      throw new Error("Falha na API do Telegram");
    }

    return { status: "SUCCESS", message: "TRANSMISSION_SECURE" };

  } catch (error) {
    console.error("Erro no envio do formulário:", error);
    return { status: "ERROR", message: "TRANSMISSION_FAILED" };
  }
}