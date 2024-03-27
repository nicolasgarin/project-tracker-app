import React, { createContext, useContext, useEffect, useState } from "react";

const UserOptionsContext = createContext(undefined);

export const UserOptionsProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [lang, setLang] = useState(localStorage.getItem("lang") || "es");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("lang", lang);
  }, [theme, lang]);

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
