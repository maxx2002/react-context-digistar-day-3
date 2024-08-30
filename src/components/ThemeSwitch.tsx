import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitch: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-16 h-9 bg-gray-600 rounded-full p-1"
    >
      <div
        className={`flex items-center justify-center w-6 h-6 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md transform transition-transform ${
          theme === "dark" ? "translate-x-3" : "-translate-x-3"
        }`}
      >
        {theme === "dark" ? (
          <FaMoon className="text-yellow-300" />
        ) : (
          <FaSun className="text-yellow-500" />
        )}
      </div>
    </button>
  );
};

export default ThemeSwitch;
