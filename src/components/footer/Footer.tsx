import React from "react";
import FogueteIcon from "../../assets/Footer/FogueteIcon.svg";
import CIcon from "../../assets/Footer/CIcon.svg";
import GitIcon from "../../assets/Footer/GitIcon.svg";
import TwitterIcon from "../../assets/Footer/TwitterIcon.svg";

export const Footer: React.FC = () => (
  <footer className="xl:col-start-1 col-span-full flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-1 px-2 py-4 rounded-lg bg-gray-900 border border-gray-700 text-gray-300">
    <h4 className="flex items-center">
      <img alt="" src={FogueteIcon} className="mr-1" />
      <span>FrontEndPro</span>
    </h4>
    <small className="flex items-center">
      <img alt="" src={CIcon} className="mr-2" />
      "2023 FrontendPro. All right reserved"
    </small>
    <div className="social flex items-center justify-center cursor-pointer">
      <img alt="" src={GitIcon} className="mr-2" />
      <img alt="" src={TwitterIcon} className="mr-2" />
    </div>
  </footer>
);
