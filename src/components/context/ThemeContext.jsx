import React, { useState } from "react";

export const StyleThemeProvider = React.createContext();

export default function StyleTheme(props) {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return (
    <StyleThemeProvider.Provider
      {...props}
      value={{ isLightTheme, setIsLightTheme }}
    />
  );
}
