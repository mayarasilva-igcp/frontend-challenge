import React from "react";

type colorType = "purple" | "pink" | "green";

interface IHeaderProps {
  color: colorType;
  description: string;
  title: string;
}

export const Header: React.FC<IHeaderProps> = ({ color, description, title }) => {
  const colorStyle = {
    purple: "from-fuchsia-600 to-pink-600",
    pink: "from-rose-400 via-fuchsia-500 to-indigo-500",
    green: "from-green-200 via-green-300 to-blue-500",
  };

  return (
    <header className="rounded-lg w-full bg-gray-900 border border-gray-700 p-8 mb-3">
      <h1
        className={`block bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center pb-4 bg-gradient-to-r ${colorStyle[color]}`}>
        {title}
      </h1>

      <p className="text-white text-center mx-auto max-w-3xl sm:text-xl sm:leading-relaxed">
        {description}
      </p>
    </header>
  );
};

 
