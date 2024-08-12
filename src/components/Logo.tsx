import React from "react";
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";
import useDarkMode from "../hooks/useDarkMode";

type LogoProps = {
  isSidebar: boolean;
};

const Logo: React.FC<LogoProps> = ({ isSidebar }) => {
  const [isDarkMode] = useDarkMode();

  return (
    <div
      className={`${
        isSidebar ? "" : "border-b-[1px]"
      } col-start-1 row-start-1 flex h-16 items-center border-r-[1px] border-grey-200 md:px-10 dark:bg-gray-500`}
    >
      <img
        src={logoLight}
        alt="Logo"
        className="hidden h-auto max-h-full w-auto max-w-full dark:block"
        loading="lazy"
      />
      <img src={logoDark} alt="Logo" className="dark:hidden" loading="lazy" />
    </div>
  );
};

export default Logo;
