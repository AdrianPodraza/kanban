import { useState, useEffect } from "react";

const useDarkMode = (): [boolean, () => void] => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    document.documentElement.classList.contains("dark"),
  );

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("dark");
    const currentMode = htmlElement.classList.contains("dark");
    setIsDarkMode(currentMode);
    localStorage.setItem("darkMode", currentMode.toString());
  };

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
    }
  }, []);

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;
