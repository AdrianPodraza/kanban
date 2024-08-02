import React from "react";
import logoDark from "../assets/logo-dark.svg";
function Logo(): JSX.Element {
  return (
    <div className="col-start-1 row-start-1 flex h-16 items-center  border-r-[1px]  border-grey-200 px-4  dark:bg-gray-500">
      <img src={logoDark}></img>
    </div>
  );
}

export default Logo;
