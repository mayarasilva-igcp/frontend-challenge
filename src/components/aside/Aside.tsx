import GitHubIcon from "../../assets/Header/GitHub.svg";

function Aside() {
  return (
    <div className="flex flex-col gap-3 px-3">
      <div className="xl:col-span-10">
        <aside
          id="Sidebar"
          className="block xl:col-span-2 fixed xl:sticky left-0 xl:left-auto top-16 xl:top-3 w-full xl:w-auto z-40 h-[calc(100vh_-_64px)] xl:h-[calc(100vh_-_24px)] transition-transform border-t xl:border border-gray-700 xl:translate-x-0 bg-gray-900 rounded-none xl:rounded-lg overflow-hidden -translate-x-full"
          aria-label="Sidebar">
          <div className="flex flex-col justify-between h-full px-3 py-8 overflow-y-auto bg-gray-900">
            <ul className="space-y-4">
              <a
                className="flex items-center px-3 py-[10px] text-base rounded-lg text-white hover:bg-indigo-600  transition duration-75 font-normal group undefined false"
                href="/solutions">
                <span className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3"></path>
                    <path d="M10 9l-2 2l2 2"></path>
                    <path d="M14 9l2 2l-2 2"></path>
                  </svg>
                </span>
                <span className="ml-3">Solutions</span>
              </a>
              <li>
                <a
                  className="flex items-center px-3 py-[10px] text-base rounded-lg text-white hover:bg-indigo-600  transition duration-75 font-normal group undefined false"
                  href="/resources">
                  <span className="flex-shrink-0">
                    <img
                      className="w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white"
                      alt=""
                      src={GitHubIcon}
                    />
                  </span>
                  <span className="ml-3">Resources</span>
                </a>
                <span className="flex-shirkin-0"></span>
              </li>
              <li>
                <a
                  className="flex items-center px-3 py-[10px] text-base rounded-lg text-white hover:bg-indigo-600  transition duration-75 font-normal group undefined false"
                  href="/roadmaps">
                  <span className="flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 transition duration-75 text-gray-300 group-hover:text-white"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M4 19l4 -14"></path>
                      <path d="M16 5l4 14"></path>
                      <path d="M12 8v-2"></path>
                      <path d="M12 13v-2"></path>
                      <path d="M12 18v-2"></path>
                    </svg>
                  </span>
                  <span className="ml-3">Roadmaps</span>
                </a>
              </li>
            </ul>
            <ul className="self-center flex-col items-center space-y-4 w-full xl:w-auto"></ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Aside;
