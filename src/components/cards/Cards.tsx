import React from "react";

interface CardProps {
  id: string;
  imageUrl: string;
  details: string[];
  title: string;
  description: string;
}

const Cards: React.FC<CardProps> = ({ id, imageUrl, details, title, description }) => (
  <article
    key={id}
    className="bg-gray-800 overflow-hidden rounded-lg border border-gray-700 p-4 shadow-sm transition hover:shadow-primary cursor-default"
  >
    <div className="relative aspect-[4/3]">
      <img
        alt="Blog Card"
        loading="lazy"
        decoding="async"
        data-nimg="fill"
        className="duration-700 ease-in-out group-hover:scale-105 scale-100 blur-0 grayscale-0"
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          inset: 0,
          objectFit: "contain",
          color: "transparent",
        }}
        src={imageUrl}
      />
    </div>
    <div className="mt-2">
      {Array.isArray(details) && (
        <div className="flex flex-row gap-2">
          {details.map((category, index) => (
            <span
              key={index}
              className="px-2.5 py-0.5 text-xs rounded font-medium uppercase text-indigo-800 bg-indigo-200 last:mr0"
            >
              {category}
            </span>
          ))}
        </div>
      )}
    </div>
    <h3 className="font-bold text-2xl text-white tracking-tight my-2 transition duration-500 hover:underline-offset-4">
      {title}
    </h3>
    <p className="font-light text-gray-400 mb-4">{description}</p>
  </article>
);

export default Cards;
