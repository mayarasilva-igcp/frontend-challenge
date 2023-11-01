import React from "react";
import CustomImage from "../comingsoon/image";

const Roadmaps: React.FC = () => {
  return (
    <div className="col-span-12 xl:col-span-10">
      <header className="rounded-lg bg-gray-900 border border-gray-700 p-8 mb-3">
        <h1 className="block bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center pb-4 bg-gradient-to-r from-fuchsia-600 to-pink-600">
          Explore Roadmaps
        </h1>
        <p className="text-white text-center mx-auto max-w-3xl sm:text-xl sm:leading-relaxed">
          "Explore our comprehensive frontend development roadmaps designed to
          guide you through the learning process, improve your skills, and
          achieve your career goals."
        </p>
        <section className="rounded-lg bg-gray-900 border border-gray-700 p-6 flex flex-col items-center">
          <h2 className="text-white font-extrabold text-3xl sm:text-4xl lg:text-5xl">
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
      </header>
    </div>
  );
};

export default Roadmaps;
