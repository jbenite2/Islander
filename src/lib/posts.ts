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

function countUniqueImages(content: string, cover: string): number {
  const images = new Set<string>();

  const add = (src: string) => {
    const normalized = src.trim().replace(/^\./, "");
    if (normalized.startsWith("/")) images.add(normalized);
  };

  add(cover);

  const imagePattern = /!\[[^\]]*\]\(([^)]+)\)/g;
  let match = imagePattern.exec(content);
  while (match) {
    add(match[1]);
    match = imagePattern.exec(content);
  }

  return images.size;
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => getPostBySlug(fileName.replace(/\.md$/, "")))
    .filter((post): post is Post => post !== null && post.content.trim() !== "");

  return posts.sort((a, b) => {
    const imageDiff =
      countUniqueImages(b.content, b.cover) - countUniqueImages(a.content, a.cover);
    if (imageDiff !== 0) return imageDiff;

    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
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
    cover:
      typeof data.cover === "string" && data.cover.startsWith("/")
        ? data.cover
        : "/img/cover1.jpg",
    categories: data.categories || [],
    tags: data.tags || [],
    content,
    contentHtml: "",
  };
}

function stripCoverImageFromHtml(contentHtml: string, cover: string): string {
  const coverPath = cover.replace(/^\./, "");
  const escaped = coverPath.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const wrapped = new RegExp(
    `<p>\\s*<img[^>]*src=["']${escaped}["'][^>]*>\\s*</p>\\s*`,
    "i"
  );
  const bare = new RegExp(`<img[^>]*src=["']${escaped}["'][^>]*>\\s*`, "i");

  return contentHtml.replace(wrapped, "").replace(bare, "");
}

export async function getPostWithHtml(slug: string): Promise<Post | null> {
  const post = getPostBySlug(slug);
  if (!post) return null;

  const processed = await remark().use(html, { sanitize: false }).process(post.content);
  post.contentHtml = stripCoverImageFromHtml(processed.toString(), post.cover);

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
