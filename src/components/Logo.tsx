import React from "react";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";
import useDarkMode from "../hooks/useDarkMode";

interface LogoProps {
  isSidebar: boolean;
}

function Logo({ isSidebar }: LogoProps): JSX.Element {
  return (
    <div
      className={`${isSidebar ? "" : "border-b-[1px]"} col-start-1 row-start-1 flex h-16 items-center border-r-[1px] border-grey-200 px-4 dark:bg-gray-500`}
    >
      <img src={isDarkMode ? logoLight : logoDark} alt="Logo" />
    </div>
  );
}

export default Logo;
