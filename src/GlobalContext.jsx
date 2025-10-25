// GlobalContext.jsx
import React, { createContext, useContext, useState } from "react";


const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [cursorPos, setCursorPos] = useState(0);

  return (
    <GlobalContext.Provider value={{ cursorPos, setCursorPos }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  return useContext(GlobalContext);
}
