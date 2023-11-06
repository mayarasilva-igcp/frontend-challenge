import React from "react";
import { OpenSidebarButton } from "../buttons/OpenSideBarButton";
import { GitHubStarButton } from "../buttons/GitHubStarButton";
import { GitHubSignUpButton } from "../buttons/GitHubSignUpButton";


export const NavBar: React.FC = () => (
  <nav className="z-50 w-full border-b border-gray-700 bg-gray-900 px-4 py-3 lg:pl-3 flex items-center justify-between">
    <div className="flex flex-row items-center w-full justify-between">
      <OpenSidebarButton />
      <span className=" cursor-pointer mg-12 hidden sm:inline text-2xl text-white font-semibold ml-3">
        🚀 FrontendPro
      </span>

      <div className="flex gap-4">
        <GitHubStarButton />
        <GitHubSignUpButton />
      </div>
    </div>
  </nav>
);
