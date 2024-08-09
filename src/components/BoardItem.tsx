import React from "react";
import boardIcon from "../assets/icon-board.svg";

type BoardItemProps = {
  active?: boolean;
  name: string;
  onChange: () => void;
};

function BoardItem({ active, name, onChange }: BoardItemProps): JSX.Element {
  return (
    <label
      className={`flex w-full cursor-pointer items-center gap-2 rounded-r-full px-4 py-2 ${
        active ? "bg-violet-dark" : "bg-inherit"
      }`}
    >
      <input
        type="radio"
        name="board"
        className="sr-only"
        checked={active}
        onChange={onChange}
      />
      <img src={boardIcon} alt="icon-board" className="h-fit" />
      <span
        className={`${
          active ? "text-white" : "text-black"
        } text-nowrap text-[15px] font-bold`}
      >
        {name}
      </span>
    </label>
  );
}

export default BoardItem;
