import React from "react";

function NewColumnForm() {
  return (
    <form className="fixed  left-1/2 top-1/2 flex w-[480px] -translate-x-1/2 -translate-y-1/2 flex-col gap-4 rounded-lg bg-white px-6 py-6">
      <h3 className="text-lg font-bold">Add New Board</h3>
      <label className="text-xs font-bold text-grey-medium" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="text"
        className="rounded-lg border-[1px] border-[#828FA3] border-opacity-25 px-2 py-2 focus:outline-none "
        placeholder="e.g. Web Design"
      />
      <label className="text-xs font-bold text-grey-medium" htmlFor="name">
        Columns
      </label>
      <div className="flex items-center  gap-7">
        <input
          id="name"
          type="text"
          className="w-full rounded-lg border-[1px] border-[#828FA3] border-opacity-25 px-2 py-2 focus:outline-none "
        />
        <button onClick={(e) => e.preventDefault()}>
          <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
            <g fill="#828FA3" fill-rule="evenodd">
              <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z" />
              <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z" />
            </g>
          </svg>
        </button>
      </div>
      <button
        className="grid place-content-center rounded-full bg-violet-dark bg-opacity-10 py-3 text-[13px] font-bold text-violet-dark"
        onClick={(e) => e.preventDefault()}
      >
        + Add New Column
      </button>
      <button
        className="grid place-content-center rounded-full bg-violet-dark py-3 text-[13px] font-bold text-white "
        onClick={(e) => e.preventDefault()}
      >
        Create New Board
      </button>
    </form>
  );
}

export default NewColumnForm;
