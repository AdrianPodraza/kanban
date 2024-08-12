import React, { useRef, useState, useEffect } from "react";
import BoardItem from "./BoardItem";
import CreateNewBoard from "./CreateNewBoard";
import ShowSidebar from "./ShowSidebar";
import ToggleDarkMode from "./ToggleDarkMode";
import useDarkMode from "../hooks/useDarkMode";
import data from "../assets/data.json";
type SidebarProps = {
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebar: boolean;
  activeBoard: number;
  setActiveBoard: any;
};

function SidePanel({
  setIsSidebar,
  isSidebar,
  activeBoard,
  setActiveBoard,
}: SidebarProps): JSX.Element {
  const [_, toggleDarkMode] = useDarkMode();
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState<boolean>(
    document.documentElement.classList.contains("dark"),
  );

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleDarkMode();
    setIsChecked(event.target.checked);
  };
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, []);

  return (
    <div
      className={`${!isSidebar ? "absolute top-16 -translate-x-full bg-white" : " "}  row-start-2 row-end-auto flex h-full flex-col justify-between border-r-[1px] py-8 pr-4 transition-all duration-300 `}
    >
      <div>
        <span className=" text-xs font-bold text-grey-medium md:px-10">
          ALL BOARDS ({data.boards.length})
        </span>
        {data.boards.map((board, i) => (
          <BoardItem
            key={board.name}
            name={board.name}
            active={activeBoard === i}
            onChange={() => setActiveBoard(i)}
          />
        ))}

        <CreateNewBoard />
      </div>
      <div className=" flex flex-col gap-6">
        <ToggleDarkMode
          ref={checkboxRef}
          checked={isChecked}
          onChange={handleToggleChange}
        />
        <ShowSidebar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
      </div>
    </div>
  );
}

export default SidePanel;
