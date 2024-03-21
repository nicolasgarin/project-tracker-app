import React from "react";
import { ACCIONES } from "../App";
import { FaCheck, FaUndo } from "react-icons/fa";

export default function CompletedSubP({ project, dispatch }) {
  return (
    <div className="completed-subp">
      {project.subcategorias.filter((subcat) => subcat.cerrada).length > 0 ? (
        <div className="filas d-flex flex-column">
          {project.subcategorias.map((subcat) => {
            if (subcat.cerrada) {
              return (
                <div
                  key={subcat.idSubcat}
                  className="fila d-flex align-items-center justify-content-between"
                >
                  <div className="nombre texto-imp">{subcat.nombreSubcat}</div>
                  <div className="info d-flex">
                    <div className="d-flex align-items-center">
                      <FaCheck className="check" />{" "}
                      {subcat.diasCheckeados.length}
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="celda celda-md check-1"></div>
                      {
                        subcat.diasCheckeados.filter((dia) => dia.status == 0)
                          .length
                      }
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="celda celda-md check-2"></div>
                      {
                        subcat.diasCheckeados.filter((dia) => dia.status == 1)
                          .length
                      }
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="celda celda-md check-3"></div>
                      {
                        subcat.diasCheckeados.filter((dia) => dia.status == 2)
                          .length
                      }
                    </div>
                    <div className="d-flex align-items-center">
                      <div className="celda celda-md check-4"></div>
                      {
                        subcat.diasCheckeados.filter((dia) => dia.status == 3)
                          .length
                      }
                    </div>
                  </div>
                  <button
                    className="btn btn-celeste"
                    onClick={() => {
                      dispatch({
                        tipo: ACCIONES.FINALIZAR_SUBPROYECTO,
                        payload: {
                          id: project.id,
                          idSubP: subcat.idSubcat,
                        },
                      });
                    }}
                  >
                    <FaUndo />
                  </button>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div className="msj d-flex align-items-center justify-content-center texto-imp">
          Todavía no hay subproyectos terminados
        </div>
      )}
    </div>
  );
}
