"use client";

interface CategoryFilterProps {
  categories: string[];
  selected: string | null;
  onSelect: (category: string | null) => void;
}

export default function CategoryFilter({
  categories,
  selected,
  onSelect,
}: CategoryFilterProps) {
  return (
    <div className="category-filter">
      <button
        type="button"
        onClick={() => onSelect(null)}
        className={`category-pill${selected === null ? " active" : ""}`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelect(cat === selected ? null : cat)}
          className={`category-pill${selected === cat ? " active" : ""}`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
