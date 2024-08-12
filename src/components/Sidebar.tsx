import React from "react";
import Logo from "./Logo";
import useScreenType from "../hooks/useScreenTypes";
import SidePanel from "./SidePanel";

type SidebarProps = {
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebar: boolean;
  activeBoard: number;
  setActiveBoard: any;
};

const Sidebar: React.FC<SidebarProps> = ({
  setIsSidebar,
  isSidebar,
  activeBoard,
  setActiveBoard,
}: SidebarProps) => {
  const screenType: string = useScreenType();
  if (screenType === "mobile") {
    return null;
  }
  return (
    <>
      <Logo isSidebar={isSidebar} />
      <SidePanel
        activeBoard={activeBoard}
        setActiveBoard={setActiveBoard}
        setIsSidebar={setIsSidebar}
        isSidebar={isSidebar}
      />
    </>
  );
};

export default Sidebar;
