import React from "react";
import useScreenType from "../hooks/useScreenTypes";
import logoMobile from "../assets/logo-mobile.svg";
import arrowDown from "../assets/icon-chevron-down.svg";
import plus from "../assets/icon-add-task-mobile.svg";
import dots from "../assets/icon-vertical-ellipsis.svg";

function Navbar(): JSX.Element {
  const screenType: string = useScreenType();
  return (
    <nav className="flex items-center px-4 py-6 justify-between dark:bg-gray-500 ">
      <div className="flex gap-4">
        {screenType === "mobile" && <img src={logoMobile} alt="logo" />}

        <div className="flex gap-2 items-center">
          <span className="flex font-bold text-lg dark:text-white">
            Platform Launch
          </span>
          <img src={arrowDown} alt="arrow down" className="w-2 h-1" />
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <button className="rounded-full bg-violet-dark grid place-content-center w-12 h-8 sm:w-[164px] sm:h-12">
          {screenType === "mobile" ? (
            <img src={plus} alt="add" />
          ) : (
            <span className="text-white font-bold text-[15px]">
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
