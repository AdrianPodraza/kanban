import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import EmptyBoard from "./components/EmptyBoard";
import useDarkMode from "./hooks/useDarkMode";
import data from "./assets/data.json";
import BoardContent from "./components/BoardContent";
import NewColumnForm from "./components/NewColumnForm";

function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const [activeBoard, setActiveBoard] = useState(0);

  console.log(data);

  return (
    <div className="grid h-screen grid-cols-5 grid-rows-custom-1 sm:grid-cols-custom-1  ">
      <Navbar setIsSidebar={setIsSidebar} isDarkMode={isDarkMode} />
      <Sidebar
        activeBoard={activeBoard}
        setActiveBoard={setActiveBoard}
        setIsSidebar={setIsSidebar}
        isSidebar={isSidebar}
      />
      {data.boards[0].columns.length === 0 ? (
        <EmptyBoard isSidebar={isSidebar} />
      ) : (
        <BoardContent activeBoard={activeBoard} isSidebar={isSidebar} />
      )}
      <NewColumnForm />
    </div>
  );
}

export default App;
