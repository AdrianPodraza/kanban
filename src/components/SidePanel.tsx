import React, { useState } from "react";
import BoardItem from "./BoardItem";
import CreateNewBoard from "./CreateNewBoard";
import ShowSidebar from "./ShowSidebar";
import ToggleDarkMode from "./ToggleDarkMode";

function SidePanel(): JSX.Element {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className=" row-start-2 row-end-auto flex h-full flex-col justify-between py-8 pr-4  ">
      <div>
        <span className="ml-4 text-xs font-bold text-grey-medium">
          ALL BOARDS (3)
        </span>
        <BoardItem active={true} />
        <BoardItem />
        <CreateNewBoard />
      </div>
      <div className=" flex flex-col gap-6">
        <ToggleDarkMode
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
        <ShowSidebar />
      </div>
    </div>
  );
}

export default SidePanel;
