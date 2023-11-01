import React from "react";
import Header from "../components/header/Header";
import { SolutionsCards } from "../components/cards/ResourcesCards";
import { Articles } from "../data/Articles";

const Solutions: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <section className="rounded-lg bg-gray-900 border border-gray-700 p-6">
          <SolutionsCards />
          <ViewCards data={Articles} />
        </section>
      </main>
    </div>
  );
};

export default Solutions;
