import React from "react";
import SignUpGitHubIcon from "../../assets/Buttons/SignUpGitHubIcon.svg";

export const GitHubSignUpButton: React.FC = () => (
  <button
    type="button"
    className="rounded-lg inline-flex justify-center items-center focus:outline-none transition px-5 py-2.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-medium group">
    <img
      className="w-6 h-6 py- mr-2 -ml-1 group-hover:fill-current"
      alt=""
      src={SignUpGitHubIcon}
    />
    Sign Up with GitHub
  </button>
);
