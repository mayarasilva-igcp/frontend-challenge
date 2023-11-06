import React from "react";
import { Articles } from "../../data/Articles";
import { ResourcesData } from "../../data/ResourceData";
import { TagsList } from "../tags/Tags";
import { ICard } from "./interfaces/ICard";
import { Card } from "./Card";

interface CardListProps {
  data: ICard[];
}

export const CardList: React.FC<CardListProps> = ({ data }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    {data.map((item) => (
      <Card key={item.id.toString()} {...item} />
    ))}
  </div>
);
