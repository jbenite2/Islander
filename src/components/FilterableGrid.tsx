"use client";

import { useState } from "react";
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
}

interface FilterableGridProps {
  posts: PostData[];
  categories: string[];
}

export default function FilterableGrid({ posts, categories }: FilterableGridProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = selected
    ? posts.filter((p) => p.categories.includes(selected))
    : posts;

  return (
    <>
      <div className="mb-8">
        <CategoryFilter
          categories={categories}
          selected={selected}
          onSelect={setSelected}
        />
      </div>

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
        <p className="text-center text-slate-400 py-12">
          No posts in this category yet.
        </p>
      )}
    </>
  );
}
