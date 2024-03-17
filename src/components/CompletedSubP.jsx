import React from "react";
import { ACCIONES } from "../App";

export default function CompletedSubP({ project, dispatch }) {
  return (
    <div className="completed-subp">
      <div className="d-flex flex-column">
        {project.subcategorias.map((subcat) => {
          if (subcat.cerrada) {
            return (
              <div key={subcat.idSubcat} className="d-flex">
                <div>{subcat.nombreSubcat}</div>
                <div>{subcat.diasCheckeados.length}</div>
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
                  Continuar subproyecto
                </button>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
