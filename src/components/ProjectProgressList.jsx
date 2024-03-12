import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

//const diaActual = day + "-" + month + "-" + year;

export default function ProjectProgressList({ data }) {
  const dateActual = new Date();
  const [year, setYear] = useState(dateActual.getFullYear());
  const [month, setMonth] = useState(dateActual.getMonth() + 1);
  const [cantDias, setCantDias] = useState(new Date(year, month, 0).getDate());
  var celdasMes = [];
  var celdasMesLetras = [];
  var availableYears = [];

  useEffect(() => {
    updateCantDias();
  }, [month, year]);

  for (let i = 1; i <= cantDias; i++) {
    let letter = new Date(year, month - 1, i)
      .toLocaleDateString("ES", {
        weekday: "long",
      })[0]
      .toUpperCase();
    celdasMes.push(
      <div
        className={"celda num d-flex justify-content-center align-items-center"}
      >
        {i}
      </div>
    );
    celdasMesLetras.push(
      <div className={"celda letra d-flex align-items-center justify-content-center"}>{letter}</div>
    );
  }

  data.map((categoria) => {
    categoria.subcategorias.map((subcat) => {
      subcat.diasCheckeados.map((dia) => {
        if (!availableYears.includes(dia.date.split("-")[0])) {
          availableYears.push(dia.date.split("-")[0]);
        }
      });
    });
  });

  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }

  function handleYear(event) {
    setYear(event.target.value);
    setMonth(1);
  }

  function prevMonth() {
    if (month == 1) {
      setYear(parseInt(year) - 1);
      setMonth(12);
    } else {
      setMonth(month - 1);
    }
  }

  function nextMonth() {
    if (month == 12) {
      setYear(parseInt(year) + 1);
      setMonth(1);
    } else {
      setMonth(month + 1);
    }
  }

  function getMonthName(monthNumber) {
    let varDate = new Date();
    varDate.setMonth(monthNumber - 1);
    return varDate.toLocaleString("es-US", { month: "long" });
  }

  function updateCantDias() {
    setCantDias(new Date(year, month, 0).getDate());
  }

  return (
    <div className="progress-list card-container">
      <div className="date-setter d-flex">
        <select
          className="select-year"
          name="year"
          id="year"
          value={year}
          onChange={handleYear}
        >
          {availableYears
            .sort()
            .reverse()
            .map((year) => {
              return <option value={year}>{year}</option>;
            })}
        </select>
        <div className="month-setter d-flex align-items-center justify-content-between">
          <button
            className="btn btn-celeste flecha"
            onClick={prevMonth}
            disabled={
              month == 1 &&
              !availableYears.includes((parseInt(year) - 1).toString())
            }
          >
            <FaAngleLeft />
          </button>
          <div className="texto-imp texo-violeta">
            {capitalizeFirstLetter(getMonthName(month))}
          </div>
          <button
            className="btn btn-celeste flecha"
            onClick={nextMonth}
            disabled={
              month == dateActual.getMonth() + 1 &&
              year == dateActual.getFullYear()
            }
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
      <div className="d-flex">
        <div className="message nombre-fila"></div>
        <div className="tabla-dias d-flex">{celdasMes}</div>
      </div>
      <div className="d-flex">
        <div className="message nombre-fila"></div>
        <div className="tabla-dias d-flex">{celdasMesLetras}</div>
      </div>
      {data.length > 0 ? (
        data.map((categoria) => {
          let diasArray = [];
          categoria.subcategorias.map((subcat) => {
            subcat.diasCheckeados.map((dia) => {
              if (dia.date.split("-")[0] == year) {
                if (dia.date.split("-")[1] == month) {
                  diasArray.push(dia);
                }
              }
            });
          });

          let celdasP = [];
          for (let i = 1; i <= cantDias; i++) {
            diasArray.filter((dia) => dia.date.split("-")[2] == i.toString())
              .length > 0
              ? celdasP.push(
                  <div
                    key={i}
                    className={`celda ${
                      diasArray.filter(
                        (dia) =>
                          dia.date.split("-")[2] == i.toString() &&
                          dia.status == 0
                      ).length > 0 &&
                      diasArray.filter(
                        (dia) =>
                          dia.date.split("-")[2] == i.toString() &&
                          (dia.status == 1 || dia.status == 2)
                      ).length == 0
                        ? "check-1 animation-1"
                        : diasArray.filter(
                            (dia) =>
                              dia.date.split("-")[2] == i.toString() &&
                              dia.status == 1
                          ).length > 0 &&
                          diasArray.filter(
                            (dia) =>
                              dia.date.split("-")[2] == i.toString() &&
                              dia.status == 2
                          ).length == 0
                        ? "check-2 animation-2"
                        : diasArray.filter(
                            (dia) =>
                              dia.date.split("-")[2] == i.toString() &&
                              dia.status == 2
                          ).length > 0
                        ? "check-3 animation"
                        : "check-4 animation-2"
                    }`}
                  ></div>
                )
              : celdasP.push(<div key={i} className={"celda"}></div>);
          }

          return (
            <div className="prog-table-item d-flex align-items-center">
              <Link className="link-fila" to={`/projects/${categoria.id}`}>
                <div className="nombre-fila texto-imp texto-celeste">
                  {categoria.nombre}
                </div>
              </Link>
              <div className="tabla-dias d-flex">{celdasP}</div>
            </div>
          );
        })
      ) : (
        <div className="message">Ingrese nuevos proyectos</div>
      )}
    </div>
  );
}
