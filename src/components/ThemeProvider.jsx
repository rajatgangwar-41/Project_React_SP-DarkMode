import { createContext, useState } from "react";

export const ThemeContext  = createContext();

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("Light")

  return (
    <ThemeContext.Provider value={{mode, setMode}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;