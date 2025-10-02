import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // ✅ fixed typo
  const [inputValue, setInputValue] = useState("");

  return (
    <DataContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
