import React from "react";
import { Aside } from "../aside/Aside";
import { NavBar } from "../navbar/NavBar";
import { IndexRoutes } from "../../routes";
import { Footer } from "../footer/Footer";

const Main: React.FC = () => {
  return (
    <div className="bg-gray-800 2xl:mx-auto flex flex-col px-40 gap-y-8">
      <NavBar />
      <main className="flex flex-row gap-4">
        <Aside />
        <div className="xl:col-span-8 w-full flex flex-col">
          <IndexRoutes />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Main;
