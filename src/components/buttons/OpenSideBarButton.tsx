import React from "react";
import OpenSideIcon from "../../assets/Buttons/OpenSideIcon.svg";

export const OpenSidebarButton: React.FC = () => (
  <button className="lg:hidden p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-lg">
    <span className="sr-only">Open sidebar</span>
    <div className="flex items-center justify-start space-x-4"></div>
    <img  alt="" src={OpenSideIcon} className="w-8 h-8"/>
  </button>
);
