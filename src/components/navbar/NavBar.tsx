import React from "react";

export const NavBar: React.FC = () => (
  <nav className="z-50 w-full border-b border-gray-700 bg-gray-900 px-4 py-3 lg:pl-3 flex items-center justify-between">
    <div className="flex flex-row items-center w-full justify-between">
      <button className="lg:hidden p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded-lg">
        <span className="sr-only">Open sidebar</span>
        <div className="flex items-center justify-start space-x-4"></div>
        <svg
          className="w-6 h-6"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path className="stroke-none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
      </button>
      <span className="mg-12 hidden sm:inline text-2xl text-white font-semibold ml-3">
        🚀 FrontendPro
      </span>

      <div className="flex gap-4">
        <button
          rel="noopener noreferrer"
          className="hidden md:flex items-center p-2.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg focus:outline-none transition">
          <svg
            className="w-6 h-6 py- mr-2 -ml-1 group-hover:fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path className="stroke-none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
          </svg>
          Star us on GitHub
        </button>
        <button
          type="button"
          className="rounded-lg inline-flex justify-center items-center focus:outline-none transition px-5 py-2.5 text-sm bg-indigo-600 hover:bg-indigo-700 text-white font-medium group">
          <svg
            className="w-6 h-6 mr-2 -ml-1 group-hover:fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path className="stroke-none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg>
          Sign Up with GitHub
        </button>
      </div>
    </div>
  </nav>
);
