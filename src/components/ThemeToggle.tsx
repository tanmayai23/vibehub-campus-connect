
import React, { useState, useEffect } from "react";

const ThemeToggle: React.FC<{
  children: (props: {
    toggleTheme: () => void;
    isDarkMode: boolean;
  }) => React.ReactElement;
}> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme based on user preference
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const storedTheme = localStorage.getItem("vibe-theme");
    
    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("vibe-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("vibe-theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return children({ toggleTheme, isDarkMode });
};

export default ThemeToggle;
