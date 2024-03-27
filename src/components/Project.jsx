import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ACCIONES } from "../App";
import { FaCheck } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useUserOptions } from "../context/UserOptionsContext";
import SubprojectProgressList from "./SubprojectProgressList";
import CompletedSubP from "./CompletedSubP";
import Logros from "./Logros";
import ProjectStats from "./ProjectStats";

export default function Project({
  data,
  nuevoSubP,
  setNuevoSubP,
  dispatch,
  diaActual,
}) {
  const { id } = useParams();
  const [proyecto, setProyecto] = useState(
    data.filter((proyecto) => proyecto.id == id)[0]
  );
  const { theme, lang } = useUserOptions();

  useEffect(() => {
    setProyecto(data.filter((proyecto) => proyecto.id == id)[0]);
  }, [data]);

  function handleSubP(e) {
    e.preventDefault();
    dispatch({
      tipo: ACCIONES.AGREGAR_SUBPROYECTO,
      payload: { nombre: nuevoSubP, id: id },
    });
    setNuevoSubP("");
  }

  return (
    <>
      <div className={`main project ${theme}`}>
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <Link to={"/"}>
                <button className="btn btn-celeste flecha">
                  <FaAngleLeft />
                </button>
              </Link>
              <h2 className="texto-imp project-title">{proyecto.nombre}</h2>
            </div>
            <form className="form-nueva-subcat" onSubmit={handleSubP}>
              <div className="container d-flex align-items-center justify-content-end">
                <label className="form-label texto-imp" htmlFor="item">
                  {lang == "es" ? "Nuevo subproyecto" : "New subproject"}
                </label>
                <input
                  required
                  className="input-form"
                  type="text"
                  value={nuevoSubP}
                  onChange={(e) => setNuevoSubP(e.target.value)}
                  id="item"
                />
                <button type="submit" className="btn btn-violeta">
                  {lang == "es" ? "Crear" : "Create"}
                </button>
              </div>
            </form>
          </div>
          <div className="subcat-list d-flex">
            <div className="subcats row d-flex">
              {proyecto.subcategorias.map((subcat) => {
                if (!subcat.cerrada) {
                  return (
                    <div
                      className="subcat texto-imp d-flex flex-column justify-content-between"
                      key={subcat.idSubcat}
                    >
                      <div className="fila-1 d-flex align-items-center justify-content-between">
                        <div className="subcat-name">
                          {subcat.nombreSubcat}
                        </div>
                        <button
                          onClick={() =>
                            dispatch({
                              tipo: ACCIONES.BORRAR_SUBPROYECTO,
                              payload: { id: id, idSubP: subcat.idSubcat },
                            })
                          }
                          className="btn btn-rojo square sq-sm"
                        >
                          <ImCross className="x" />
                        </button>
                      </div>
                      <div className="fila-2 d-flex align-items-center judfy-content-between">
                        <div>Progreso del día </div>
                        <div
                          className={`celda celda-project ${
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
                          } d-flex align-items-center justify-content-center`}
                          onClick={() =>
                            dispatch({
                              tipo: ACCIONES.ACTUALIZAR_SUBPROYECTO,
                              payload: {
                                id: proyecto.id,
                                idSubP: subcat.idSubcat,
                              },
                            })
                          }
                        ><FaCheck className="check-ic" /></div>
                      </div>

                      <div className="subcat-info d-flex flex-column g-10">
                        <div className="">Total : {subcat.diasCheckeados.length}</div>
                        <div className="row rg-10">
                        <div className="d-flex col-6 align-items-center g-15">
                          <div className="celda check-1"></div>
                          {
                            subcat.diasCheckeados.filter(
                              (dia) => dia.status == 0
                            ).length
                          }
                        </div>
                        <div className="d-flex col-6 align-items-center g-15">
                          <div className="celda check-2"></div>
                          {
                            subcat.diasCheckeados.filter(
                              (dia) => dia.status == 1
                            ).length
                          }
                        </div>
                        <div className="d-flex col-6 align-items-center g-15">
                          <div className="celda check-3"></div>
                          {
                            subcat.diasCheckeados.filter(
                              (dia) => dia.status == 2
                            ).length
                          }
                        </div>
                        <div className="d-flex col-6 align-items-center g-15">
                          <div className="celda check-4"></div>
                          {
                            subcat.diasCheckeados.filter(
                              (dia) => dia.status == 3
                            ).length
                          }
                        </div>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          dispatch({
                            tipo: ACCIONES.FINALIZAR_SUBPROYECTO,
                            payload: {
                              id: id,
                              idSubP: subcat.idSubcat,
                            },
                          })
                        }
                        className="btn btn-celeste"
                      >
                        {lang == "es" ? "Finalizar" : "Finish"}
                      </button>
                    </div>
                  );
                }
              })}
            </div>

            <div className="tab-section d-flex flex-column">
              <ul className="nav nav-tabs" id="infoTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="completados-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#subproyectos-completados"
                    type="button"
                    role="tab"
                    aria-controls="subproyectos-completados"
                    aria-selected="true"
                  >
                    {lang == "es" ? "Completados" : "Completed"}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="logros-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#logros"
                    type="button"
                    role="tab"
                    aria-controls="logros"
                    aria-selected="false"
                  >
                    {lang == "es" ? "Logros" : "Achievements"}
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="stats-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#stats"
                    type="button"
                    role="tab"
                    aria-controls="stats"
                    aria-selected="false"
                  >
                    Info
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="infoTabContent">
                <div
                  className="tab-pane fade show active"
                  id="subproyectos-completados"
                  role="tabpanel"
                  aria-labelledby="completados-tab"
                  tabindex="0"
                >
                  <CompletedSubP project={proyecto} dispatch={dispatch} />
                </div>
                <div
                  className="tab-pane fade"
                  id="logros"
                  role="tabpanel"
                  aria-labelledby="logros-tab"
                  tabindex="0"
                >
                  <Logros project={proyecto} dispatch={dispatch} />
                </div>
                <div
                  className="tab-pane fade"
                  id="stats"
                  role="tabpanel"
                  aria-labelledby="stats-tab"
                  tabindex="0"
                >
                  <ProjectStats project={proyecto} />
                </div>
              </div>
            </div>
          </div>
          <div className="section-celdas">
            <SubprojectProgressList project={proyecto} />
          </div>
        </div>
      </div>
    </>
  );
}
