import { getAllPosts } from "@/lib/posts";
import { getBlurDataURL } from "@/lib/image-utils";
import FilterableGrid from "@/components/FilterableGrid";
import PalmDecor from "@/components/PalmDecor";

import { showDelMonte } from "@/lib/features";

export const metadata = {
  title: showDelMonte ? "Places | DelMonte Concierge" : "Islander PR — Puerto Rico",
  description: "A local guide to the best spots in Puerto Rico",
};

const tickerItems = [
  "Hidden Beaches",
  "Rainforest",
  "Old San Juan",
  "Local Food",
  "El Yunque",
  "Isla Verde",
  "Bioluminescent Bay",
  "Secret Rivers",
];

export default async function PlacesPage() {
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
    <>
      <section className="places-hero">
        <PalmDecor />
        <div className="places-hero-inner">
          <p className="places-eyebrow">Islander PR</p>
          <h1 className="places-title">
            Places <em>locals</em> actually go.
          </h1>
          <p className="places-lead">
            Beaches, food, trails, and neighborhoods across Puerto Rico — the spots worth knowing before you land.
          </p>
        </div>
      </section>

      <div className="places-ticker">
        <div className="places-ticker-inner">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={`${item}-${i}`}>
              <span className="places-ticker-item">{item}</span>
              <span className="places-ticker-dot"> ◆ </span>
            </span>
          ))}
        </div>
      </div>

      <div className="places-main">
        <FilterableGrid posts={postsWithBlur} categories={allCategories} />
      </div>
    </>
  );
}
