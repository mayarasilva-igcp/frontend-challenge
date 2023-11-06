import React from "react";

interface TagsListProps {
  categories: string[];
}

export const TagsList: React.FC<TagsListProps> = ({ categories }) => (
  <div className="flex flex-row gap-2">
    {categories.map((category, index) => (
      <span
        key={index}
        className="px-2.5 py-0.5 text-xs rounded font-medium uppercase text-indigo-800 bg-indigo-200 last:mr-0"
      >
        {category}
      </span>
    ))}
  </div>
);


