import React, { createContext, useContext, useState } from "react";

const UserOptionsContext = createContext(undefined);

export const UserOptionsProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("es");

  return (
    <UserOptionsContext.Provider
      value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
        lang,
        toggleLang: () => setLang(lang === "es" ? "en" : "es"),
      }}
    >
      {children}
    </UserOptionsContext.Provider>
  );
};

export const useUserOptions = () => useContext(UserOptionsContext);
