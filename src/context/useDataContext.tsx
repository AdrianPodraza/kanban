import React, { createContext, useContext, useState } from "react";
import dataInitial from "../assets/data.json"; // Upewnij się, że struktura JSON jest zgodna

type Subtask = {
  title: string;
  isCompleted: boolean;
};

type Task = {
  title: string;
  description: string;
  status: string;
  subtasks: Subtask[];
};

type Column = {
  name: string;
  tasks: Task[];
};

type Board = {
  name: string;
  columns: Column[];
};

type AppContextType = {
  data: Board[];
  addBoard: (board: Board) => void;
  updateBoardName: (oldName: string, newName: string) => void;
  updateColumnName: (
    boardName: string,
    oldColumnName: string,
    newColumnName: string,
  ) => void;
  addColumn: (boardName: string) => void;
  updateData: (newData: Board[]) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<Board[]>(dataInitial.boards);

  const addBoard = (board: Board) => {
    setData((prevData) => [...prevData, board]);
  };

  const updateBoardName = (oldName: string, newName: string) => {
    setData((prevData) =>
      prevData.map((board) =>
        board.name === oldName ? { ...board, name: newName } : board,
      ),
    );
  };

  const updateColumnName = (
    boardName: string,
    oldColumnName: string,
    newColumnName: string,
  ) => {
    setData((prevData) =>
      prevData.map((board) =>
        board.name === boardName
          ? {
              ...board,
              columns: board.columns.map((column) =>
                column.name === oldColumnName
                  ? { ...column, name: newColumnName }
                  : column,
              ),
            }
          : board,
      ),
    );
  };

  const addColumn = (boardName: string) => {
    setData((prevData) =>
      prevData.map((board) => {
        if (board.name === boardName) {
          const newColumn: Column = { name: "", tasks: [] };
          return {
            ...board,
            columns: [...board.columns, newColumn],
          };
        }
        return board;
      }),
    );
  };

  const updateData = (newData: Board[]) => {
    setData(newData);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        addBoard,
        updateBoardName,
        updateColumnName,
        addColumn,
        updateData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
