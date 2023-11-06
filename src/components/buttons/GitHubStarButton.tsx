import React from "react";
import StarGitHubIcon from "../../assets/Buttons/StarGitHubIcon.svg";

export const GitHubStarButton: React.FC = () => (
  <button
    rel="noopener noreferrer"
    className="hidden md:flex items-center p-2.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg focus:outline-none transition">
    <img
      className="w-6 h-6 py- mr-2 -ml-1 group-hover:fill-current"
      alt=""
      src={StarGitHubIcon}
    />
    Star us on GitHub
  </button>
);
