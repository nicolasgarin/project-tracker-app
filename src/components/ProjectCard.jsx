import React, { useEffect, useRef, useState } from "react";
import { ACCIONES } from "../App";
import { Link } from "react-router-dom";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaBrain, FaPaintBrush, FaEye, FaStar } from "react-icons/fa";
import { GiNightSleep } from "react-icons/gi";
import { CiStar } from "react-icons/ci";
import { TbEyeClosed } from "react-icons/tb";
import { ImCross } from "react-icons/im";

export default function ProjectCard({
  project,
  dispatch,
  diaActual,
  setCardHeights,
  height,
}) {
  const cardEl = useRef();
  useEffect(setCardMaxHeight, [project]);
  useEffect(() => {
    window.addEventListener("resize", setCardMaxHeight);
    return () => window.removeEventListener("resize", setCardMaxHeight);
  }, []);

  function setCardMaxHeight() {
    const frontHeight = cardEl.current.getBoundingClientRect().height;
    setCardHeights((currentHeights) => [...currentHeights, frontHeight]);
  }

  return (
    <>
      <div className="col-3">
        <div
          className={`card ${project.archivado ? "disabled" : ""}`}
          ref={cardEl}
          id={project.id}
          key={project.id}
          style={{ height: height }}
        >
          <div className="card-header">
            <h3 className="title d-flex justify-content-between align-items-center">
              {!project.archivado ? (
                <Link className="link-titulo" to={`/projects/${project.id}`}>
                  {project.nombre}
                </Link>
              ) : (
                <div>{project.nombre}</div>
              )}
              {project.tipo == "Salud" ? (
                <BsHeartPulseFill />
              ) : project.tipo == "Crecimiento" ? (
                <FaBrain />
              ) : (
                <FaPaintBrush />
              )}
            </h3>
          </div>
          <div className="card-body d-flex flex-column justify-content-between">
            <div className="d-flex justify-content-between">
              <div className="subcat d-flex flex-column w-100">
                {project.subcategorias.map((subcat) => {
                  if (!subcat.cerrada) {
                    return (
                      <div
                        className="fila-card d-flex align-items-center"
                        id={subcat.idSubcat}
                        key={subcat.idSubcat}
                        onClick={() =>
                          dispatch({
                            tipo: ACCIONES.ACTUALIZAR_SUBPROYECTO,
                            payload: {
                              id: project.id,
                              idSubP: subcat.idSubcat,
                            },
                          })
                        }
                      >
                        <div className="subcat-name">{subcat.nombreSubcat}</div>
                        {!project.archivado ? (
                          <div
                            className={`celda celda-sm celda-check ${
                              subcat.diasCheckeados.filter(
                                (dia) => dia.date == diaActual
                              ).length > 0
                                ? subcat.diasCheckeados.filter(
                                    (dia) =>
                                      dia.date == diaActual && dia.status == 0
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
                          ></div>
                        ) : (
                          <div className="celda celda-sm celda-disabled"></div>
                        )}
                      </div>
                    );
                  }
                })}
              </div>
              <div className="vertical-btn d-flex flex-column">
                {!project.archivado ? (
                  <div
                    onClick={() =>
                      dispatch({
                        tipo: ACCIONES.FAV_PROYECTO,
                        payload: { id: project.id },
                      })
                    }
                    className={`star ${
                      project.favorito ? "filled" : "outline"
                    }`}
                  >
                    <CiStar className="star-outline" />
                    <FaStar className="star-fill" />
                  </div>
                ) : (
                  <div className={`star outline disabled`}>
                    <CiStar className="star-outline" />
                  </div>
                )}
                <div
                  onClick={() =>
                    dispatch({
                      tipo: ACCIONES.ARCHIVAR_PROYECTO,
                      payload: { id: project.id },
                    })
                  }
                  className={`moon ${
                    project.archivado ? "deactive" : "active"
                  }`}
                >
                  <GiNightSleep />
                </div>
              </div>
            </div>

            <div className="buttons d-flex justify-content-between align-items-center">
              {!project.archivado ? (
                <Link to={`/projects/${project.id}`}>
                  <button className="btn btn-celeste-4 btn-ojo square">
                    <TbEyeClosed className="closed" />
                    <FaEye className="open" />
                  </button>
                </Link>
              ) : (
                <button
                  disabled={true}
                  className="btn btn-celeste-4 btn-ojo square"
                >
                  <TbEyeClosed className="closed" />
                </button>
              )}
              {!project.archivado ? (
                <button
                  onClick={() =>
                    dispatch({
                      tipo: ACCIONES.BORRAR_PROYECTO,
                      payload: { id: project.id },
                    })
                  }
                  className="btn btn-rojo square"
                >
                  <ImCross className="x" />
                </button>
              ) : (
                <button disabled={true} className="btn btn-rojo square">
                  <ImCross className="x" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
