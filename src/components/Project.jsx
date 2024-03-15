import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ACCIONES } from "../App";
import { FaAngleLeft } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import SubprojectProgressList from "./SubprojectProgressList";

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
  const [idSubP, setIdSubP] = useState();

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
      <div className="main project">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
          <Link to={"/"}>
            <button className="btn btn-celeste flecha"><FaAngleLeft /></button>
          </Link>
          <h2 className="texto-imp">{proyecto.nombre}</h2>
          </div>
            <form className="form-nueva-subcat" onSubmit={handleSubP}>
              <div className="container d-flex align-items-center justify-content-end">
                <label className="form-label" htmlFor="item">
                  Nuevo Subproyecto
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
                  Crear
                </button>
              </div>
            </form>
          </div>
          <div className="subcat-list d-flex">
            {proyecto.subcategorias.map((subcat) => {
              return (
                <div className="row">
                  <div className="section-info">
                    <div className="subcat">
                      <div id={subcat.idSubcat} key={subcat.idSubcat}>
                        <div className="fila-1 d-flex align-items-center justify-content-between">
                          <div className="texto-imp"> {subcat.nombreSubcat}</div>
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
                        {!subcat.cerrada ? (
                        <div
                          className={`celda celda-check ${
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
                          onClick={() =>
                            dispatch({
                              tipo: ACCIONES.ACTUALIZAR_SUBPROYECTO,
                              payload: {
                                id: proyecto.id,
                                idSubP: subcat.idSubcat,
                              },
                            })
                          }
                        ></div>
                        ) : null}

                        <div className="subcat-info">
                          <div>
                            Total : {subcat.diasCheckeados.length}
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="celda check-1"></div>
                            {
                              subcat.diasCheckeados.filter(
                                (dia) => dia.status == 0
                              ).length
                            }
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="celda check-2"></div>
                            {
                              subcat.diasCheckeados.filter(
                                (dia) => dia.status == 1
                              ).length
                            }
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="celda check-3"></div>
                            {
                              subcat.diasCheckeados.filter(
                                (dia) => dia.status == 2
                              ).length
                            }
                          </div>
                          <div className="d-flex align-items-center">
                            <div className="celda check-4"></div>
                            {
                              subcat.diasCheckeados.filter(
                                (dia) => dia.status == 3
                              ).length
                            }
                          </div>
                          {subcat.cerrada ? (
                            <div className="cerrado">Cerrado</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="section-celdas">
            <SubprojectProgressList project={proyecto} />
          </div>
        </div>
      </div>
    </>
  );
}
