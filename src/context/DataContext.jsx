import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext(undefined);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      `https://raw.githubusercontent.com/nicolasgarin/jsons/main/project-data.json`
    )
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
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

export const DATA = [
    {
      nombre: "EF",
      id: "fdgfdfg",
      tipo: "salud",
      subcategorias: [
        {
          nombreSubcat: "Tesis",
          idSubcat: "dfajkb",
          diasCheckeados: [
            "2024-1-15",
            "2024-1-23",
            "2024-2-3",
            "2024-3-1",
            "2024-3-2",
          ],
        },
      ],
    },
    {
      nombre: "Programación",
      id: "adkjfla",
      tipo: "crecimiento",
      subcategorias: [
        {
          nombreSubcat: "React",
          idSubcat: "lkfjsda",
          diasCheckeados: ["2023-12-16", "2024-1-18", "2024-2-3", "2024-2-7"],
        },
        {
          nombreSubcat: "Liferay",
          idSubcat: "aflñdsj",
          diasCheckeados: [
            "2024-1-6",
            "2024-1-11",
            "2024-1-13",
            "2024-1-18",
            "2024-3-1",
          ],
        },
      ],
    },
  ];

