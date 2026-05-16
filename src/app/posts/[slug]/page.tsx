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
    title: `${post.title} | Islander PR`,
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
    <article className="max-w-3xl mx-auto px-6 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-slate-500 hover:text-emerald-600 transition-colors mb-6"
      >
        &larr; Back to all posts
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700"
            >
              {cat}
            </span>
          ))}
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          {post.title}
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          {formattedDate} &middot; {post.author}
        </p>
      </header>

      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-10 shadow-md">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover"
          placeholder="blur"
          blurDataURL={blurDataURL}
          priority
        />
      </div>

      <div
        className="prose prose-slate prose-lg max-w-none prose-img:rounded-xl prose-img:shadow-md prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </article>
  );
}
