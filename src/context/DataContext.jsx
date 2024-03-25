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
    id: "ukjsdf21sdds",
    tipo: "Salud",
    fechaCreacion: "2024-1-15",
    favorito: false,
    archivado: false,
    logros: [
      {
        idLogro: "ghre",
        nombreLogro: "Examen salud",
        imgLogo: "star"
      }
    ],
    subcategorias: [
      {
        nombreSubcat: "Tesis",
        idSubcat: "sdf1sdf2",
        cerrada: false,
        diasCheckeados: [
          {
            date: "2024-1-15",
            status: 1
          },
          {
            date: "2024-1-23",
            status: 1
          },
          {
            date: "2024-2-3",
            status: 0
          },
          {
            date: "2024-3-1",
            status: 1
          },
          {
            date: "2024-3-2",
            satus: 2
          }
        ]
      },
      {
        nombreSubcat: "Examen Deporte",
        idSubcat: "sdf133sdf2",
        cerrada: true,
        diasCheckeados: [
          {
            date: "2024-2-7",
            status: 0
          },
          {
            date: "2024-2-8",
            status: 1
          },
          {
            date: "2024-2-9",
            status: 2
          },
          {
            date: "2024-2-10",
            status: 2
          }
        ]
      }
    ]
  },
  {
    nombre: "Programación",
    id: "adkj4s5la",
    tipo: "Crecimiento",
    fechaCreacion: "2023-12-16",
    favorito: true,
    archivado: false,
    logros: [],
    subcategorias: [
      {
        nombreSubcat: "React",
        idSubcat: "dsfdfs1ew",
        cerrada: false,
        diasCheckeados: [
          {
            date: "2023-12-16",
            status: 0
          },
          {
            date: "2024-1-18",
            status: 1
          },
          {
            date: "2024-2-3",
            status: 0
          },
          {
            date: "2024-2-7",
            status: 2
          }
        ]
      },
      {
        nombreSubcat: "Liferay",
        idSubcat: "wew2sd",
        cerrada: false,
        diasCheckeados: [
          {
            date: "2024-1-6",
            status: 1
          },
          {
            date: "2024-1-11",
            status: 0
          },
          {
            date: "2024-1-13",
            status: 3
          },
          {
            date: "2024-1-18",
            status: 1
          },
          {
            date: "2024-3-1",
            status: 2
          },
            {
            date: "2024-3-3",
            status: 0
          },
            {
            date: "2024-3-4",
            status: 1
          }
        ]
      }
    ]
  },
  {
    nombre: "Entrenamiento",
    id: "ukjsdsdff21sdds",
    tipo: "Salud",
    fechaCreacion: "2024-2-17",
    favorito: false,
    archivado: false,
    logros: [
      {
        idLogro: "dskfs",
        nombreLogro: "5K Montevideo corre",
        imgLogo: "ray"
      },
      {
        idLogro: "dskfsdfdss",
        nombreLogro: "3 meses crossfit",
        imgLogo: "cup"
      }
    ],
    subcategorias: [
      {
        nombreSubcat: "Correr",
        idSubcat: "sdf1sdvcf2",
        cerrada: false,
        diasCheckeados: [
          {
            date: "2024-2-17",
            status: 1
          },
          {
            date: "2024-2-20",
            status: 0
          },
          {
            date: "2024-2-21",
            status: 1
          },
          {
            date: "2024-3-3",
            status: 0
          },
          {
            date: "2024-3-6",
            satus: 3
          }
        ]
      }
    ]
  }
]

