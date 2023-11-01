import React from "react";
import Header from "../header/Header";
import { SolutionsCards } from "../cards/ResourcesCards";

function Solutions() {
  return (
    <div className="container mx-auto">
      <Header />

      <main>
        <section className="rounded-lg bg-gray-900 border border-gray-700 p-6">
          <SolutionsCards />
        </section>
      </main>
    </div>
  );
}

export default Solutions;
