import React from "react";
import Logo from "./Logo";
import useScreenType from "../hooks/useScreenTypes";
import SidePanel from "./SidePanel";

interface SidebarProps {
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ setIsSidebar, isSidebar }) => {
  const screenType: string = useScreenType();
  if (screenType === "mobile") {
    return null;
  }
  return (
    <>
      <Logo isSidebar={isSidebar} />
      <SidePanel setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
    </>
  );
};

export default Sidebar;
