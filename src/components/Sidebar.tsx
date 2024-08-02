import React from "react";
import Logo from "./Logo";
import useScreenType from "../hooks/useScreenTypes";
import SidePanel from "./SidePanel";
function Sidebar() {
  const screenType: string = useScreenType();
  if (screenType === "mobile") {
    return null;
  }
  return (
    <>
      <Logo />
      <SidePanel />
    </>
  );
}

export default Sidebar;
