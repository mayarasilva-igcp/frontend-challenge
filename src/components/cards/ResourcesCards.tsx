import React from "react";
import Cards from "./Cards";
import { Articles } from "../../data/Articles";
import { ResourcesData } from "../../data/ResourceData";

const SolutionsCards: React.FC = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    {Articles.map((article) => (
      <Cards
        key={article.id}
        imageUrl={article.imageUrl}
        details={article.details}
        title={article.title}
        description={article.description}
        id={article.id.toString()}
      />
    ))}
  </div>
);

const ResourcesCards: React.FC = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    {ResourcesData.map((resource) => (
      <Cards
        key={resource.id}
        imageUrl={resource.imageUrl}
        details={resource.details}
        title={resource.title}
        description={resource.description}
        id={resource.id.toString()}
      />
    ))}
  </div>
);

export { SolutionsCards, ResourcesCards };
