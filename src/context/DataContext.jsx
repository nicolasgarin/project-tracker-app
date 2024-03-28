import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get('https://raw.githubusercontent.com/nicolasgarin/json/main/project-tracker-data.json')
    .then(res => {
      setData(res.data);
    })
    .catch(err => console.log(err));
  }, []);
  
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);