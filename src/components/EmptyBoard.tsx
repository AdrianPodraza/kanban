import React from "react";
function EmptyBoard({ isSidebar }: boolean): JSX.Element {
  return (
    <div
      className={`${isSidebar ? " col-span-4 " : "col-span-5"} dark:bg-grey-very-dark flex flex-col items-center justify-center gap-12 bg-grey-light`}
    >
      <p className="text-center text-lg font-bold text-grey-medium">
        This board is empty. Create a new column to get started.
      </p>
      <button className="grid h-12 w-[164px] place-content-center rounded-full bg-violet-dark">
        <span className="text-[15px] font-bold text-white">
          + Add New Column
        </span>
      </button>
    </div>
  );
}

export default EmptyBoard;
