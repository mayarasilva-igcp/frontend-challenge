import ResourcesIcon from "../../assets/Header/ResourcesIcon.svg";
import SolutionsIcon from "../../assets/Header/SolutionsIcon.svg";
import RoadmapsIcon from "../../assets/Header/RoadmapsIcon.svg";

export const Aside: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 px-3">
      <div className="xl:col-span-10">
        <aside
          id="Sidebar"
          className="block xl:col-span-2 fixed xl:sticky left-0 xl:left-auto top-16 xl:top-3 w-full xl:w-auto z-40 h-[calc(100vh-_64px)] xl:h-[calc(100vh-_24px)] transition-transform border-t xl:border border-gray-700 xl:translate-x-0 bg-gray-900 rounded-none xl:rounded-lg overflow-hidden -translate-x-full"
          aria-label="Sidebar">
          <div className="flex flex-col justify-between h-full px-11 py-10 overflow-y-auto bg-gray-900">
            <ul className="space-y-4 ">
              <a
                className="flex items-center px-1 py-[10px] text-base rounded-lg text-white hover:bg-indigo-600 transition duration-75 font-normal group undefined false"
                href="/solutions">
                <span className="flex-shrink-0 white w-6 h-6 transition duration-75">
                  <img
                    alt=""
                    src={SolutionsIcon}
                    className="[&>*]:text-white fill-white white"
                  />
                </span>
                <span className="ml-3 text-white">Solutions</span>
              </a>
              <li>
                <a
                  className="flex items-center px-1 py-[10px] text-base rounded-lg text-white hover:bg-indigo-600 transition duration-75 font-normal group undefined false"
                  href="/resources">
                  <span className="flex-shrink-0">
                    <img
                      className="w-6 h-6 transition duration-75 text-white group-hover:text-white"
                      alt=""
                      src={ResourcesIcon}
                    />
                  </span>
                  <span className="ml-3 text-white">Resources</span>
                </a>
                <span className="flex-shirkin-0"></span>
              </li>
              <li>
                <a
                  className="flex items-center px-1 py-[10px] text-base rounded-lg text-white hover:bg-indigo-600 transition duration-75 font-normal group undefined false"
                  href="/roadmaps">
                  <span className="flex-shrink-0">
                    <img
                      className="w-6 h-6 transition duration-75 text-white group-hover:text-white"
                      alt=""
                      src={RoadmapsIcon}
                    />
                  </span>
                  <span className="ml-3 text-white">Roadmaps</span>
                </a>
              </li>
            </ul>
            <ul className="self-center flex-col items-center space-y-4 w-full xl:w-auto"></ul>
          </div>
        </aside>
      </div>
    </div>
  );
};
