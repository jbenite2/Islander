"use client";

import { useMemo, useState } from "react";
import CategoryFilter from "./CategoryFilter";
import MasonryGrid from "./MasonryGrid";
import PostCard from "./PostCard";

interface PostData {
  slug: string;
  title: string;
  cover: string;
  blurDataURL: string;
  date: string;
  categories: string[];
  imageCount: number;
}

interface FilterableGridProps {
  posts: PostData[];
  categories: string[];
}

function sortByImages(posts: PostData[]) {
  return [...posts].sort((a, b) => {
    const imageDiff = b.imageCount - a.imageCount;
    if (imageDiff !== 0) return imageDiff;

    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export default function FilterableGrid({ posts, categories }: FilterableGridProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const list = selected
      ? posts.filter((p) => p.categories.includes(selected))
      : posts;

    return sortByImages(list);
  }, [posts, selected]);

  return (
    <>
      <CategoryFilter
        categories={categories}
        selected={selected}
        onSelect={setSelected}
      />

      <MasonryGrid>
        {filtered.map((post, i) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            cover={post.cover}
            blurDataURL={post.blurDataURL}
            date={post.date}
            categories={post.categories}
            priority={i < 6}
          />
        ))}
      </MasonryGrid>

      {filtered.length === 0 && (
        <p className="places-empty">No places in this category yet.</p>
      )}
    </>
  );
}
