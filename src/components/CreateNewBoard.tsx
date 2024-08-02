import React from "react";
import boardIcon from "../assets/icon-board.svg";

function CreateNewBoard(): JSX.Element {
  return (
    <div
      className={`  flex w-full items-center gap-2 rounded-r-full  px-4 py-2`}
    >
      <img src={boardIcon} alt="icon-board" className=" h-fit " />
      <span className={`text-nowrap text-[15px] font-bold text-violet-dark `}>
        + Create New Board
      </span>
    </div>
  );
}

export default CreateNewBoard;
