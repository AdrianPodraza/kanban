import React, { createContext, useContext, useState } from "react";
import dataInitial from "../assets/data.json";
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
  boards: Board[];
  addBoard: (board: Board) => void;
  data: any;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [data, setData] = useState<Object>(dataInitial);

  const addBoard = (board: Board) => {
    setBoards((prevBoards) => [...prevBoards, board]);
  };

  return (
    <AppContext.Provider value={{ boards, addBoard, data }}>
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
