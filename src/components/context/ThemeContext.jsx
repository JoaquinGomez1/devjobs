import React, { useState, useEffect } from "react";

export const StyleThemeProvider = React.createContext();

export default function StyleTheme(props) {
  const [isLightTheme, setIsLightTheme] = useState(true);

  useEffect(() => {
    const wasThemeSet = localStorage.getItem("theme");
    // Check only when the theme was set to dark and change it
    if (wasThemeSet)
      wasThemeSet === "light" ? setIsLightTheme(true) : setIsLightTheme(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  return (
    <StyleThemeProvider.Provider
      {...props}
      value={{ isLightTheme, setIsLightTheme }}
    />
  );
}
