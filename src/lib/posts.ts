import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export interface Post {
  slug: string;
  title: string;
  date: string;
  author: string;
  cover: string;
  categories: string[];
  tags: string[];
  content: string;
  contentHtml: string;
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => getPostBySlug(fileName.replace(/\.md$/, "")))
    .filter((post): post is Post => post !== null && post.content.trim() !== "");

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  if (data.draft === true) return null;

  return {
    slug,
    title: data.title || slug,
    date: data.date ? new Date(data.date).toISOString() : "",
    author: data.author || "Jose Benitez",
    cover: data.cover || "/img/cover1.jpg",
    categories: data.categories || [],
    tags: data.tags || [],
    content,
    contentHtml: "",
  };
}

export async function getPostWithHtml(slug: string): Promise<Post | null> {
  const post = getPostBySlug(slug);
  if (!post) return null;

  const processed = await remark().use(html, { sanitize: false }).process(post.content);
  post.contentHtml = processed.toString();

  return post;
}

export function getAllSlugs(): string[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""))
    .filter((slug) => {
      const post = getPostBySlug(slug);
      return post !== null;
    });
}
