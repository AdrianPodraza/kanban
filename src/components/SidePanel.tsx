import React, { useRef, useState, useEffect } from "react";
import BoardItem from "./BoardItem";
import CreateNewBoard from "./CreateNewBoard";
import ShowSidebar from "./ShowSidebar";
import ToggleDarkMode from "./ToggleDarkMode";
import useDarkMode from "../hooks/useDarkMode";
import data from "../assets/data.json";
interface SidebarProps {
  setIsSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  isSidebar: boolean;
}

function SidePanel({ setIsSidebar, isSidebar }: SidebarProps): JSX.Element {
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
  const [activeBoard, setActiveBoard] = useState<number | null>(0);

  return (
    <div
      className={`${!isSidebar ? "absolute top-16 bg-white -translate-x-full" : " "}  row-start-2 row-end-auto flex h-full flex-col justify-between border-r-[1px] py-8 pr-4 transition-all duration-300 `}
    >
      <div>
        <span className="ml-4 text-xs font-bold text-grey-medium">
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
