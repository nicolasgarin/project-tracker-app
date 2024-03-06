import React, { useState } from "react";
import { ACCIONES } from "../App";
import { Link } from "react-router-dom";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaBrain, FaPaintBrush } from "react-icons/fa";

export default function ProjectCard({ project, dispatch, diaActual }) {
  return (
    <>
      <div className="col-3">
        <div className="card" id={project.id} key={project.id}>
          <div className="card-header">
            <h3 className="title d-flex justify-content-between align-items-center">
              {project.nombre}
              {project.tipo == "salud" ? (
                <BsHeartPulseFill />
              ) : project.tipo == "crecimiento" ? (
                <FaBrain />
              ) : (
                <FaPaintBrush />
              )}
            </h3>
          </div>
          <div className="card-body">
            <div className="subcat">
              {project.subcategorias.map((subcat) => {
                return (
                  <div
                    className="fila-card d-flex align-items-center"
                    id={subcat.idSubcat}
                    key={subcat.idSubcat}
                  >
                    {subcat.nombreSubcat}
                    <div
                      className={`celda celda-check ${
                        subcat.diasCheckeados.filter(
                          (dia) => dia.date == diaActual
                        ).length > 0
                          ? subcat.diasCheckeados.filter(
                              (dia) => dia.date == diaActual && dia.status == 0
                            ).length > 0
                            ? "check-1"
                            : subcat.diasCheckeados.filter(
                                (dia) =>
                                  dia.date == diaActual && dia.status == 1
                              ).length > 0
                            ? "check-2"
                            : subcat.diasCheckeados.filter(
                                (dia) =>
                                  dia.date == diaActual && dia.status == 2
                              ).length > 0
                            ? "check-3"
                            : "check-4"
                          : ""
                      }`}
                      onClick={() =>
                        dispatch({
                          tipo: ACCIONES.ACTUALIZAR_SUBPROYECTO,
                          payload: { id: project.id, idSubP: subcat.idSubcat },
                        })
                      }
                    ></div>
                  </div>
                );
              })}
            </div>

            <div className="buttons">
              <Link to={`/projects/${project.id}`}>
                <button className="btn btn-celeste">Ver proyecto</button>
              </Link>
              {
                //<button onClick={() => dispatch({ tipo: ACCIONES.CHECKEAR_PROYECTO, payload: { id: project.id } })} className='btn btn-celeste mb-3 mt-3'>Toggle Check</button>
              }
              <button
                onClick={() =>
                  dispatch({
                    tipo: ACCIONES.BORRAR_PROYECTO,
                    payload: { id: project.id },
                  })
                }
                className="btn btn-delete"
              >
                Borrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
