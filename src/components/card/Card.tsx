import React from "react";
import { Articles } from "../../data/Articles";
import { ResourcesData } from "../../data/ResourceData";
import {TagsList} from "../tags/Tags";

interface CardProps {
  id: string;
  imageUrl: string;
  details: string[];
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({
  id,
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

interface CardListProps {
  data: CardProps[];
}

const CardList: React.FC<CardListProps> = ({ data }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    {data.map((item) => (
      <Card key={item.id} {...item} />
    ))}
  </div>
);

export const SolutionsCards: React.FC = () => (
  <CardList data={Articles.map((article) => ({ ...article, id: article.id.toString() }))} />
);

export const ResourcesCards: React.FC = () => (
  <CardList data={ResourcesData.map((resource) => ({ ...resource, id: resource.id.toString() }))} />
);
