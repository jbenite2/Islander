"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  slug: string;
  title: string;
  cover: string;
  blurDataURL: string;
  date: string;
  categories: string[];
  priority?: boolean;
}

export default function PostCard({
  slug,
  title,
  cover,
  blurDataURL,
  date,
  categories,
  priority = false,
}: PostCardProps) {
  const navigating = useRef(false);

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/posts/${slug}`}
      className="place-card"
      onClick={(e) => {
        if (navigating.current) {
          e.preventDefault();
          return;
        }
        navigating.current = true;
      }}
    >
      <article className="place-card-inner">
        <div className="place-card-image">
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={blurDataURL}
            priority={priority}
          />
        </div>
        <div className="place-card-body">
          <div className="place-card-tags">
            {categories.map((cat) => (
              <span key={cat} className="place-card-tag">
                {cat}
              </span>
            ))}
          </div>
          <h2 className="place-card-title">{title}</h2>
          <time className="place-card-date">{formattedDate}</time>
        </div>
      </article>
    </Link>
  );
}
