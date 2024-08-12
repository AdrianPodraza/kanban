import React from "react";

type TaskProps = {
  title: string;
  subTaskLength: number;
  completedSubTasks: number;
};
function Task({ title, subTaskLength, completedSubTasks }: TaskProps) {
  return (
    <div className="flex flex-col rounded-xl bg-white px-3 py-4 text-[15px] font-bold shadow-lg">
      <div>{title}</div>
      <span className="text-xs font-bold text-grey-medium">
        {completedSubTasks} of {subTaskLength} substasks
      </span>
    </div>
  );
}

export default Task;
