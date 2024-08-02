import React from "react";
import hideSidebar from "../assets/icon-hide-sidebar.svg";

function ShowSidebar(): JSX.Element {
  return (
    <div className="flex items-center gap-4 px-4 py-2">
      <img src={hideSidebar} alt="hide sidebar" className=" h-fit" />
      <span className="text-nowrap font-bold text-grey-medium">
        Hide Sidebar
      </span>
    </div>
  );
}

export default ShowSidebar;
