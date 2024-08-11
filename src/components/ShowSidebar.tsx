import React from "react";
import hideSidebar from "../assets/icon-hide-sidebar.svg";
import showSidebar from "../assets/icon-show-sidebar.svg";

interface ShowSidebarProps {
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebar: boolean;
}

const ShowSidebar: React.FC<ShowSidebarProps> = ({
  setIsSidebar,
  isSidebar,
}) => {
  return (
    <>
      <button
        className="flex items-center gap-4 px-4 py-2"
        onClick={() => setIsSidebar((isSidebar) => !isSidebar)}
      >
        <img src={hideSidebar} alt="hide sidebar" className="h-fit" />
        <span className="text-nowrap font-bold text-grey-medium">
          Hide Sidebar
        </span>
      </button>
      <button
        className={`${isSidebar ? "-translate-x-full " : " translate-x-[218px] "} -translate-y-16 absolute z-10 flex h-12 w-14 items-center justify-center rounded-r-full bg-violet-dark transition-all duration-300`}
        onClick={() => setIsSidebar((isSidebar) => !isSidebar)}
      >
        {" "}
        <img src={showSidebar} alt="show sidebar" className="h-fit" />
      </button>
    </>
  );
};

export default ShowSidebar;
