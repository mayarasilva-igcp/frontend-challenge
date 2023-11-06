import React from "react";
import { TagsList } from "../tags/Tags";
import { ICard } from "./interfaces/ICard";

export const Card: React.FC<ICard> = ({
  imageUrl,
  details,
  title,
  description,
}) => (
  <article className="hover:scale-105 scale-100 duration-700 bg-gray-800 overflow-hidden rounded-lg border border-gray-700 p-4 shadow-sm transition hover:shadow-primary cursor-pointer">
    <div className="relative aspect-[4/3]">
      <img
        alt="Blog Card"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        className="duration-700 ease-in-out group-hover:scale-105 scale-100 blur-0 grayscale-0 position: absolute h-100 w-100 inset-0 objectFit:contain color:transparent"
        src={imageUrl}
      />
    </div>
    <div className="mt-2">
      {Array.isArray(details) && <TagsList categories={details} />}
    </div>
    <h3 className="font-bold text-2xl text-white tracking-tight my-2 transition duration-500 hover:underline-offset-4">
      {title}
    </h3>
    <p className="font-light text-gray-400 mb-4">{description}</p>
  </article>
);
