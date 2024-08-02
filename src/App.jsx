import Navbar from "./components/Navbar";
import React from "react";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <div className="grid-cols-custom-1 grid-rows-custom-1 grid h-screen ">
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;
