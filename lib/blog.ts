import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostData {
  slug: string;
  title: string;
  date: string;
  updated?: string;
  description: string;
  image: string;
  content: string;
}

export function getAllPosts(): PostData[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter(
      (fileName) =>
        fileName.endsWith(".mdx") || fileName.endsWith(".md")
    )
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$|\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        updated: data.updated || "",
        description: data.description || "",
        image: data.image || "",
        content,
      };
    });

  return allPostsData.sort((a, b) =>
    a.date < b.date ? 1 : -1
  );
}