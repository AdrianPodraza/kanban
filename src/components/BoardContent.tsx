import React, { useState } from "react";
import data from "../assets/data.json";


type EmptyBoardProps = {
  isSidebar: boolean;
};
const colors = [
  "#49C4E5",
  "#8471F2",
  "#67E2AE",
]
function Column({ index }: number) {

 
  return (
    <div className="bg-gray-200  p-4">
      <div className="flex gap-2 items-center font-bold text-[15px] text-grey-medium tracking-[2.4px]">

      <div className={`rounded-full w-4 h-4 `} style={{
        backgroundColor:colors[index]}} />
        {data.boards[0].columns[index].name} ({data.boards[0].columns[index].tasks.length})
        </div>  
    </div>
  );
}
function BoardContent({ isSidebar }: EmptyBoardProps) {
  const [numColumns, setNumColumns] = useState(2);

  const handleAddColumn = () => {
    setNumColumns(numColumns + 1);
  };
  console.log(data);
  return (
    <div
      className={`${isSidebar ? " col-span-4 " : "col-span-5"} flex items-center justify-center gap-12 bg-grey-light dark:bg-grey-very-dark`}
    >
      <div
        className="grid h-full w-full"
        style={{ gridTemplateColumns: `repeat(${numColumns}, 1fr)` }}
      >
        {Array.from({ length: numColumns }).map((_, index) => (
          <Column index={index} key={index} />
        ))}
        <button
          className={`to-grey-opacity col-span-1 -col-start-1  flex h-full items-center justify-center bg-gradient-to-b from-[#E9EFFA] text-2xl font-bold text-grey-medium`}
          onClick={handleAddColumn}
        >
          + New Column
        </button>
      </div>
    </div>
  );
}

export default BoardContent;
