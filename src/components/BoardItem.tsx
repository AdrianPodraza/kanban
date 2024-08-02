import React from "react";
import boardIcon from "../assets/icon-board.svg";

interface BoardItemProps {
  active?: boolean;
}
function BoardItem({ active }: BoardItemProps): JSX.Element {
  return (
    <div
      className={` ${active ? "bg-violet-dark " : "bg-inherit"} flex w-full items-center gap-2 rounded-r-full  px-4 py-2`}
    >
      <img src={boardIcon} alt="icon-board" className=" h-fit " />
      <span
        className={` ${active ? "text-white " : "text-black "}text-nowrap text-[15px] font-bold `}
      >
        Platform Launch
      </span>
    </div>
  );
}

export default BoardItem;
