import { Route, Routes } from "react-router";
import { DATA, useData } from "./context/DataContext";
import { useEffect, useReducer, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Project from "./components/Project";

const objDate = new Date();
const year = objDate.getFullYear();
const month = objDate.getMonth() + 1;
const day = objDate.getDate();
const diaActual = year + "-" + month + "-" + day;

export const ACCIONES = {
  ACTUALIZAR_DATA: "actualizar-data",
  AGREGAR_PROYECTO: "agregar-proyecto",
  BORRAR_PROYECTO: "borrar-proyecto",
  FAV_PROYECTO: "fav-proyecto",
  ARCHIVAR_PROYECTO: "archivar-proyecto",
  AGREGAR_SUBPROYECTO: "agregar-subproyecto",
  BORRAR_SUBPROYECTO: "borrar-subproyecto",
  ACTUALIZAR_SUBPROYECTO: "actualizar-subproyecto",
  FINALIZAR_SUBPROYECTO: "finalizar-subproyecto",
};

function reducer(categorias, accion) {
  switch (accion.tipo) {
    case ACCIONES.ACTUALIZAR_DATA:
      return categorias.sort(function(a, b) {
        return a.archivado ? 1 : -1;
    }).sort(function(a, b) {
      return a.favorito ? -1 : 1;
  });
    case ACCIONES.AGREGAR_PROYECTO:
      return [
        ...categorias,
        nuevoProyecto(accion.payload.nombre, accion.payload.tipo),
      ];
    case ACCIONES.BORRAR_PROYECTO:
      return categorias.filter(
        (categoria) => categoria.id !== accion.payload.id
      );
    case ACCIONES.AGREGAR_SUBPROYECTO:
      return nuevoSubProyecto(
        accion.payload.nombre,
        accion.payload.id,
        categorias
      );
    case ACCIONES.BORRAR_SUBPROYECTO:
      return borrarSubProyecto(
        accion.payload.id,
        accion.payload.idSubP,
        categorias
      );
    case ACCIONES.FAV_PROYECTO:
      return categorias.map((categoria) => {
        if (categoria.id === accion.payload.id) {
          return {
            ...categoria,
            favorito: !categoria.favorito,
          };
        } else {
          return categoria;
        }
      });
    case ACCIONES.ARCHIVAR_PROYECTO:
      return categorias.map((categoria) => {
        if (categoria.id === accion.payload.id) {
          return {
            ...categoria,
            favorito: false,
            archivado: !categoria.archivado,
          };
        } else {
          return categoria;
        }
      });
    case ACCIONES.ACTUALIZAR_SUBPROYECTO:
      return actualizarSubProyecto(
        accion.payload.id,
        accion.payload.idSubP,
        categorias
      );
      case ACCIONES.FINALIZAR_SUBPROYECTO:
        return finalizarSubProyecto(
          accion.payload.id,
          accion.payload.idSubP,
          categorias
        );
    default:
      return categorias;
  }
}

function nuevoProyecto(nombreP, tipoP) {
  return {
    id: uuidv4(),
    nombre: nombreP,
    favorito: false,
    archivado: false,
    tipo: tipoP,
    subcategorias: [],
  };
}

function nuevoSubProyecto(nombreSubP, idP, categorias) {
  return categorias.map((categoria) => {
    if (categoria.id === idP) {
      return {
        ...categoria,
        subcategorias: [
          ...categoria.subcategorias,
          { nombreSubcat: nombreSubP, idSubcat: uuidv4(), cerrada: false, diasCheckeados: [] },
        ],
      };
    } else {
      return categoria;
    }
  });
}

function borrarSubProyecto(idP, idSubP, categorias) {
  return categorias.map((categoria) => {
    if (categoria.id === idP) {
      return {
        ...categoria,
        subcategorias: categoria.subcategorias.filter(
          (cat) => cat.idSubcat !== idSubP
        ),
      };
    } else {
      return categoria;
    }
  });
}

function actualizarSubProyecto(idP, idSubP, categorias) {
  return categorias.map((categoria) => {
    if (categoria.id === idP) {
      return {
        ...categoria,
        subcategorias: categoria.subcategorias.map((subcat) => {
          if (subcat.idSubcat === idSubP) {
            return {
              ...subcat,
              diasCheckeados:
                subcat.diasCheckeados.filter((dia) => dia.date == diaActual)
                  .length > 0
                  ? subcat.diasCheckeados.filter(
                      (dia) => dia.date == diaActual && dia.status == 0
                    ).length > 0
                    ? [
                        ...subcat.diasCheckeados.filter(
                          (dia) => dia.date != diaActual
                        ),
                        { date: diaActual, status: 1 },
                      ]
                    : subcat.diasCheckeados.filter(
                        (dia) => dia.date == diaActual && dia.status == 1
                      ).length > 0
                    ? [
                        ...subcat.diasCheckeados.filter(
                          (dia) => dia.date != diaActual
                        ),
                        { date: diaActual, status: 2 },
                      ]
                    : subcat.diasCheckeados.filter(
                        (dia) => dia.date == diaActual && dia.status == 2
                      ).length > 0
                    ? [
                        ...subcat.diasCheckeados.filter(
                          (dia) => dia.date != diaActual
                        ),
                        { date: diaActual, status: 3 },
                      ]
                    : subcat.diasCheckeados.filter(
                        (dia) => dia.date != diaActual
                      )
                  : [...subcat.diasCheckeados, { date: diaActual, status: 0 }],
            };
          } else {
            return subcat;
          }
        }),
      };
    } else {
      return categoria;
    }
  });
}

function finalizarSubProyecto(idP, idSubP, categorias) {
  return categorias.map((categoria) => {
    if (categoria.id === idP) {
      return {
        ...categoria,
        subcategorias: categoria.subcategorias.map((subcat) => {
          if (subcat.idSubcat === idSubP) {
            return {
              ...subcat,
              cerrada: !subcat.cerrada,
            };
          } else {
            return subcat;
          }
        }),
      };
    } else {
      return categoria;
    }
  });
}

export default function App() {
  //const { data } = useData();
  const [categorias, dispatch] = useReducer(reducer, DATA);
  const [nuevoP, setNuevoP] = useState("");
  const [nuevoT, setNuevoT] = useState("");
  const [nuevoSubP, setNuevoSubP] = useState("");
  const [idP, setIdP] = useState();
  const [cardHeights, setCardHeights] = useState([]);

  const newProjectEl = useRef();

  useEffect(()=>{
    dispatch({
      tipo: ACCIONES.ACTUALIZAR_DATA,
    })
  },[categorias])

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              data={categorias}
              dispatch={dispatch}
              nuevoP={nuevoP}
              setNuevoP={setNuevoP}
              nuevoT={nuevoT}
              setNuevoT={setNuevoT}
              newProjectEl={newProjectEl}
              diaActual={diaActual}
              cardHeights={cardHeights}
              setCardHeights={setCardHeights}
            />
          }
        />
        <Route path="/projects">
          <Route
            path=":id"
            element={
              <Project
                data={categorias}
                dispatch={dispatch}
                nuevoSubP={nuevoSubP}
                setNuevoSubP={setNuevoSubP}
                setIdP={setIdP}
                diaActual={diaActual}
              />
            }
          />
        </Route>
        <Route path="*" element={<h1>Ups!Página no encontrada</h1>} />
      </Routes>
      <Footer />
    </>
  );
}
