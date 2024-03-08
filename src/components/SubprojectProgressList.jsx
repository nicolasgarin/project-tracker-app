import React, { useEffect, useState } from "react";

export default function SubprojectProgressList({ project }) {
  const dateActual = new Date();
  const [year, setYear] = useState(dateActual.getFullYear());
  const [month, setMonth] = useState(dateActual.getMonth() + 1);
  const [cantDias, setCantDias] = useState(new Date(year, month, 0).getDate());
  var celdasMes = [];
  var availableYears = [];

  useEffect(() => {
    updateCantDias();
  }, [month, year]);

  for (let i = 1; i <= cantDias; i++) {
    celdasMes.push(
      <div className={"celda num d-flex justify-content-center"}>{i}</div>
    );
  }

  project.subcategorias.map((subcat) => {
    subcat.diasCheckeados.map((dia) => {
      if (!availableYears.includes(dia.date.split("-")[0])) {
        availableYears.push(dia.date.split("-")[0]);
      }
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
    let nameDate = new Date(
      dateActual.getFullYear(),
      monthNumber,
      dateActual.getDate()
    );
    nameDate.setMonth(monthNumber - 1);
    return nameDate.toLocaleString("es-US", { month: "long" });
  }

  function updateCantDias() {
    setCantDias(new Date(year, month, 0).getDate());
  }

  return (
    <>
      <p>Calendario Subproyecto</p>
      <p>{project.nombre}</p>
      <div className="card-container">
        <div className="dateSetter d-flex">
          <select name="year" id="year" value={year} onChange={handleYear}>
            {availableYears.sort().reverse().map((year) => {
              return <option value={year}>{year}</option>;
            })}
          </select>

          <button
            className="btn btn-celeste"
            onClick={prevMonth}
            disabled={
              month == 1 &&
              !availableYears.includes((parseInt(year) - 1).toString())
            }
          >
            Prev month
          </button>
          <div>{capitalizeFirstLetter(getMonthName(month))}</div>
          <button
            className="btn btn-celeste"
            onClick={nextMonth}
            disabled={
              parseInt(month) == dateActual.getMonth() + 1 &&
              parseInt(year) == dateActual.getFullYear()
            }
          >
            Next month
          </button>
        </div>

        <div className="d-flex">
          <div className="message nombre-fila">
            {month} - {year}
          </div>
          <div>
            <div className="tabla-dias d-flex">{celdasMes}</div>
            {project.subcategorias.map((subcat) => {
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
                diasArray.filter(
                  (dia) => dia.date.split("-")[2] == i.toString()
                ).length > 0
                  ? celdasP.push(
                      <div
                        key={i}
                        className={`celda ${
                          diasArray.filter(
                            (dia) =>
                              dia.date.split("-")[2] == i.toString() &&
                              dia.status == 0
                          ).length > 0
                            ? "check-1"
                            : diasArray.filter(
                                (dia) =>
                                  dia.date.split("-")[2] == i.toString() &&
                                  dia.status == 1
                              ).length > 0
                            ? "check-2"
                            : diasArray.filter(
                                (dia) =>
                                  dia.date.split("-")[2] == i.toString() &&
                                  dia.status == 2
                              ).length > 0
                            ? "check-3"
                            : "check-4"
                        }`}
                      ></div>
                    )
                  : celdasP.push(<div key={i} className={"celda"}></div>);
              }

              return (
                <div className="prog-table-item d-flex align-items-center">
                  <div className="nombre-fila">{subcat.nombreSubcat}</div>
                  <div className="tabla-dias d-flex">{celdasP}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
