import React from "react";
import useScreenType from "../hooks/useScreenTypes";
import logoMobile from "../assets/logo-mobile.svg";
import arrowDown from "../assets/icon-chevron-down.svg";
import plus from "../assets/icon-add-task-mobile.svg";
import dots from "../assets/icon-vertical-ellipsis.svg";

function Navbar(): JSX.Element {
  const screenType: string = useScreenType();
  return (
    <nav className="col-span-full flex  h-16 items-center justify-between border-b-[1px] border-grey-200 px-4 sm:col-start-2  dark:bg-gray-500">
      <div className="flex gap-4">
        {screenType === "mobile" && <img src={logoMobile} alt="logo" />}

        <div className="flex items-center gap-2">
          <span className="flex text-lg font-bold dark:text-white">
            Platform Launch
          </span>
          <img src={arrowDown} alt="arrow down" className="h-1 w-2" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="grid h-8 w-12 place-content-center rounded-full bg-violet-dark sm:h-12 sm:w-[164px]">
          {screenType === "mobile" ? (
            <img src={plus} alt="add" />
          ) : (
            <span className="text-[15px] font-bold text-white">
              + Add New Task
            </span>
          )}
        </button>
        <img src={dots} alt="menu " className="h-4" />
      </div>
    </nav>
  );
}

export default Navbar;
