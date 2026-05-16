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
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={`/posts/${slug}`}
      className="group block break-inside-avoid mb-5"
    >
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm ring-1 ring-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            placeholder="blur"
            blurDataURL={blurDataURL}
            priority={priority}
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700"
              >
                {cat}
              </span>
            ))}
          </div>
          <h2 className="text-lg font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
            {title}
          </h2>
          <time className="text-sm text-slate-400 mt-1 block">
            {formattedDate}
          </time>
        </div>
      </article>
    </Link>
  );
}
