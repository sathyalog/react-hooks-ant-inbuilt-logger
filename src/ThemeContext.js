import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
/* Update context provider */
const ThemeUpdateContext = React.createContext();

/* Custom hook to use theme */
export function useTheme() {
  return useContext(ThemeContext);
}

/* Custom hook to apply theme update */
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  function toggleTheme() {
    console.log(darkTheme ? "Light theme applied" : "Dark theme applied")
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      {/* Function to update our theme */}
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}
