import React from "react";
import { Header } from "../components/header/Header";
import { CardList } from "../components/card/CardList";
import { Articles } from "../data/Articles";

export const Solutions: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Header
        color="pink"
        title="Explore Solutions"
        description="Find solutions to frontend coding challenges submitted by fellow developers. Get inspired, learn new techniques and improve your skills. 🚀"
      />

      <main>
        <section className="rounded-lg bg-gray-900 border border-gray-700 p-6">
          <CardList data={Articles as any[]} />
        </section>
      </main>
    </div>
  );
};
