import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();
function ThemeProvide({ children }) {
  const [theme, setTheme] = useState("day");

  useEffect(() => {
    const root = document.documentElement;
    theme === "night"
      ? root.classList.add("dark")
      : root.classList.remove("dark");
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvide;
