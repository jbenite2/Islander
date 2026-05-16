import { getAllPosts } from "@/lib/posts";
import { getBlurDataURL } from "@/lib/image-utils";
import FilterableGrid from "@/components/FilterableGrid";

export default async function HomePage() {
  const posts = getAllPosts();

  const postsWithBlur = await Promise.all(
    posts.map(async (post) => ({
      slug: post.slug,
      title: post.title,
      cover: post.cover,
      blurDataURL: await getBlurDataURL(post.cover),
      date: post.date,
      categories: post.categories,
    }))
  );

  const allCategories = Array.from(
    new Set(posts.flatMap((p) => p.categories))
  )
    .filter((c) => c !== "category1")
    .sort();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <section className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Discover Puerto Rico
        </h1>
        <p className="mt-2 text-lg text-slate-500">
          A local&apos;s guide to the best spots on the island.
        </p>
      </section>

      <FilterableGrid posts={postsWithBlur} categories={allCategories} />
    </div>
  );
}
