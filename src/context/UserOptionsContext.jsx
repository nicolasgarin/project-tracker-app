import React, { createContext, useContext, useState } from "react";

const UserOptionsContext = createContext(undefined);

export const UserOptionsProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <UserOptionsContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
      }}
    >
      {children}
    </UserOptionsContext.Provider>
  );
};

export const useUserOptions = () => useContext(UserOptionsContext);
