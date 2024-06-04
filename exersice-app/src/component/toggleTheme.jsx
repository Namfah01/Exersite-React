import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={` flex flex-col p-100 m-100 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <p>Current theme: {theme}</p>
      <button
        onClick={toggleTheme}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemedComponent;