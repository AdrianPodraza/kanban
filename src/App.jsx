import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import EmptyBoard from "./components/EmptyBoard";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [isSidebar, setIsSidebar] = useState(true);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className="grid h-screen grid-cols-5 grid-rows-custom-1 sm:grid-cols-custom-1  ">
      <Navbar setIsSidebar={setIsSidebar} isDarkMode={isDarkMode} />
      <Sidebar setIsSidebar={setIsSidebar} isSidebar={isSidebar} />
      <EmptyBoard isSidebar={isSidebar} />
    </div>
  );
}

export default App;
