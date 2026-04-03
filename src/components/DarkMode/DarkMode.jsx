import React, { useEffect, useState } from "react";

const DARK_THEME = "dark";
const LIGHT_THEME = "light";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === LIGHT_THEME ? LIGHT_THEME : DARK_THEME;
};

const DarkMode = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.body.classList.remove(DARK_THEME, LIGHT_THEME);
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      className={theme === DARK_THEME ? "clicked" : ""}
      id="darkMode"
      onClick={() =>
        setTheme((currentTheme) =>
          currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME
        )
      }
    >
      <span>
        <i className="fas fa-sun"></i>
      </span>
      <span>
        <i className="fas fa-moon"></i>
      </span>
    </button>
  );
};

export default DarkMode;
