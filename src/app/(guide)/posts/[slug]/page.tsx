import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getAllSlugs, getPostWithHtml } from "@/lib/posts";
import { getBlurDataURL } from "@/lib/image-utils";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostWithHtml(slug);
  if (!post) return {};
  return {
    title: `${post.title} | DelMonte Concierge`,
    description: `Discover ${post.title} in Puerto Rico`,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostWithHtml(slug);
  if (!post) notFound();

  const blurDataURL = await getBlurDataURL(post.cover);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="post-page">
      <Link href="/places" className="post-back">
        ← Back to places
      </Link>

      <header>
        <div className="post-tags">
          {post.categories.map((cat) => (
            <span key={cat} className="post-tag">
              {cat}
            </span>
          ))}
        </div>
        <h1 className="post-title">{post.title}</h1>
        <p className="post-meta">
          {formattedDate} · {post.author}
        </p>
      </header>

      <div className="post-cover">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          style={{ objectFit: "cover" }}
          placeholder="blur"
          blurDataURL={blurDataURL}
          priority
        />
      </div>

      <div
        className="post-prose"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
