import React from "react";
import Header from "../components/header/Header";
import { ResourcesCards } from "../components/cards/ResourcesCards";

const Resources: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <main>
        <section className="rounded-lg bg-gray-900 border border-gray-700 p-6">
          <h1 className="block bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center pb-4 bg-gradient-to-r from-green-200 via-green-300 to-blue-500">
            Explore Resources
          </h1>
          <p className="text-white text-center mx-auto max-w-3xl sm:text-xl sm-leading-relaxed">
            Find the best resources and developer tools for frontend development
            here. Whether you're a beginner or a pro, we've got you covered.
            Start learning today!
          </p>
          <ResourcesCards />
        </section>
      </main>
    </div>
  );
};

export default Resources;
