import React from "react";
import { ResourcesCards } from "../components/cards/Card";
import { Header } from "../components/header/Header";

export const Resources: React.FC = () => {
  return (
    <div className="col-span-12 xl:col-span-10">
      <main>
        <Header
          color="green"
          title="Explore Resources"
          description="Find the best resources and developer tools for frontend development here. Whether you're a beginner or a pro, we've got you covered. Start learning today!"
        />
        <ResourcesCards />
      </main>
    </div>
  );
};


