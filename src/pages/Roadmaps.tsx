import React from "react";
import { CustomImage } from "../components/comingsoon/image";
import { Header } from "../components/header/Header";

export const Roadmaps: React.FC = () => {
  return (
    <div className="col-span-12 xl:col-span-10">
      <Header
        color="purple"
        title="Explore Roadmaps"
        description="Explore our comprehensive frontend development roadmaps designed to guide you through the learning process, improve your skills, and achieve your career goals."
      />

      <section className="rounded-lg bg-gray-900 border border-gray-700 p-10 flex flex-col items-center mt-10">
        <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl mt-10">
          Coming Soon
        </h2>
        <CustomImage
          alt="roadmaps coming soon"
          width={500}
          height={500}
          src="https://www.frontendpro.dev/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcoming-soon.ef0ab651.png&w=1080&q=75"
          className="-mt-14"
        />
      </section>
    </div>
  );
};


