import React from "react";
import Aside from "../aside/Aside";
// import Resources from "../Resources/Resources";
import { NavBar } from "../navbar/NavBar";
import Header from "../header/Header";
import Roadmaps from "../Roadmaps/Roadmaps";
import Solutions from "../Solutions/Solutions";
import { IndexRoutes } from "../../routes";

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
    </div>
  );
};

export default Main;
