// App.js
import React, { useEffect, useState } from "react";
import Home from "./Components/Home/Home";
// import { ThemeProvider } from "./Context/theme";

function App() {
  // const [themeMode, setThemeMode] = useState("light");

  // const lightTheme = () => {
  //   setThemeMode("light");
  // };

  // const darkTheme = () => {
  //   setThemeMode("dark");
  // };

  // useEffect(() => {
  //   document.querySelector("html").classList.remove("light", "dark");
  //   document.querySelector("html").classList.add(themeMode);
  // }, [themeMode]);

  return (
    // <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <Home />
    // </ThemeProvider>
  );
}

export default App;
