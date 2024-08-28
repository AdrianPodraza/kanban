import React, { useState } from "react";
import { useAppContext } from "../context/useDataContext"; // Upewnij się, że kontekst jest poprawnie zaimportowany
import Task from "./Task";
import ScrollContainer from "react-indiana-drag-scroll";
import NewColumnForm from "./NewColumnForm";

const colors = ["#49C4E5", "#8471F2", "#67E2AE"];

type EmptyBoardProps = {
  isSidebar: boolean;
  activeBoard: number;
};

type ColumnProps = {
  index: number;
  activeBoard: number;
};

type Subtask = {
  title: string;
  isCompleted: boolean;
};

type TaskType = {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
};

const Column: React.FC<ColumnProps> = ({ index, activeBoard }) => {
  const { data } = useAppContext();
  const column = data[activeBoard].columns[index];

  return (
    <div className=" flex  flex-col gap-6  p-4">
      <div className="flex items-center gap-2 text-[15px] font-bold tracking-[2.4px] text-grey-medium">
        <div
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: colors[index] }}
        />
        {column?.name} ({column?.tasks.length})
      </div>
      {column?.tasks.map((task: TaskType, index: number) => (
        <Task
          key={index}
          title={task.title}
          subTaskLength={task.subtasks.length}
          completedSubTasks={
            task.subtasks.filter((subtask) => subtask.isCompleted).length
          }
        />
      ))}
    </div>
  );
};

const BoardContent: React.FC<EmptyBoardProps> = ({
  isSidebar,
  activeBoard,
}) => {
  const { data } = useAppContext();
  const [numColumns, setNumColumns] = useState<number>(
    data[activeBoard].columns.length,
  );
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleAddColumn = () => {
    setShowModal(true);
  };

  return (
    <div
      className={`${isSidebar ? "col-span-4" : "col-span-5"} flex  items-center justify-center gap-12 bg-grey-light dark:bg-grey-very-dark`}
    >
      {showModal && (
        <NewColumnForm
          columns={data[activeBoard].columns}
          boardName={data[activeBoard].name}
          handleCloseModal={() => setShowModal(false)}
        />
      )}
      <ScrollContainer
        className="scroll-container flex h-full w-full cursor-move  overflow-x-auto bg-gray-200"
        hideScrollbars={false}
      >
        {data[activeBoard].columns.map((_, index) => (
          <Column activeBoard={activeBoard} index={index} key={index} />
        ))}
        <button
          className="col-span-1 ml-6 mt-16 flex h-full max-h-[800px] w-[300px] items-center justify-center rounded-lg bg-gradient-to-b from-[#E9EFFA] to-grey-opacity text-2xl font-bold text-grey-medium"
          onClick={handleAddColumn}
        >
          + New Column
        </button>
      </ScrollContainer>
    </div>
  );
};

export default BoardContent;
