import React, { useEffect, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { useUserOptions } from "../context/UserOptionsContext";

export default function SubprojectProgressList({ project }) {
  const { lang } = useUserOptions();
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
        .toLocaleDateString(lang, {
          weekday: "long",
        })[0]
        .toUpperCase();
      celdasMes.push(
        <div
          className={
            "celda num d-flex align-items-center justify-content-center"
          }
        >
          {i}
        </div>
      );
      celdasMesLetras.push(
        <div
          className={
            "celda letra d-flex align-items-center justify-content-center"
          }
        >
          {letter}
        </div>
      );
    }

    project.subcategorias.map((subcat) => {
      if (!subcat.cerrada) {
        subcat.diasCheckeados.map((dia) => {
          if (!availableYears.includes(dia.date.split("-")[0])) {
            availableYears.push(dia.date.split("-")[0]);
          }
        });
      }
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
    let nameDate = new Date(
      dateActual.getFullYear(),
      monthNumber,
      dateActual.getDate()
    );
    nameDate.setMonth(monthNumber - 1);
    return nameDate.toLocaleString(`${lang}-US`, { month: "long" });
  }

  function updateCantDias() {
    setCantDias(new Date(year, month, 0).getDate());
  }

  return (
    <>
      <div className="progress-list card-container">
        <h3 className="titulo">{lang == "es" ? "Progresión" : "Progress"}</h3>
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
            <div className="texto-imp month-name">
              {capitalizeFirstLetter(getMonthName(month))}
            </div>
            <button
              className="btn btn-celeste flecha"
              onClick={nextMonth}
              disabled={
                parseInt(month) == dateActual.getMonth() + 1 &&
                parseInt(year) == dateActual.getFullYear()
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
        {project.subcategorias.map((subcat) => {
          if (!subcat.cerrada) {
            let diasArray = [];
            subcat.diasCheckeados.map((dia) => {
              if (dia.date.split("-")[0] == year) {
                if (dia.date.split("-")[1] == month) {
                  diasArray.push(dia);
                }
              }
            });

            var celdasP = [];
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
                        ).length > 0
                          ? "check-1 animation"
                          : diasArray.filter(
                              (dia) =>
                                dia.date.split("-")[2] == i.toString() &&
                                dia.status == 1
                            ).length > 0
                          ? "check-2 animation-2"
                          : diasArray.filter(
                              (dia) =>
                                dia.date.split("-")[2] == i.toString() &&
                                dia.status == 2
                            ).length > 0
                          ? "check-3  animation"
                          : "check-4  animation-2"
                      }`}
                    ></div>
                  )
                : celdasP.push(<div key={i} className={"celda"}></div>);
            }

            return (
              <div className="prog-table-item d-flex align-items-center">
                <div className="nombre-fila texto-imp">{subcat.nombreSubcat}</div>
                <div className="tabla-dias d-flex">{celdasP}</div>
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
