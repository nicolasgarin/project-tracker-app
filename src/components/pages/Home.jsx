import React from "react";
import "../../main.scss";
import ProjectList from "../ProjectCardList";
import { ACCIONES } from "../../App";
import { useUserOptions } from '../../context/UserOptionsContext';
import ProjectProgressList from "../ProjectProgressList";

export default function Home({
  data,
  dispatch,
  nuevoP,
  setNuevoP,
  nuevoT,
  setNuevoT,
  newProjectEl,
  diaActual,
  cardHeights,
  setCardHeights,
}) {
  const { theme, lang } = useUserOptions();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      tipo: ACCIONES.AGREGAR_PROYECTO,
      payload: { nombre: nuevoP, tipo: nuevoT },
    });
    setNuevoP("");
    setNuevoT("");
  }

  return (
    <div className={`home ${theme}`}>
      <form className="form-nuevo" onSubmit={handleSubmit}>
        <div className="container d-flex align-items-center justify-content-end">
          <label className="form-label" htmlFor="item">
            {lang == "es" ? "Nuevo proyecto" : "New proyect"}
          </label>
          <input
            required
            className="input-form"
            type="text"
            value={nuevoP}
            onChange={(e) => setNuevoP(e.target.value)}
            id="item"
            ref={newProjectEl}
          />
          <label className="form-label" htmlFor="categoria">
            {lang == "es" ? "Categoría" : "Category"}
          </label>
          <select
            required
            id="categoria"
            className="input-form select"
            type="select"
            value={nuevoT}
            onChange={(e) => setNuevoT(e.target.value)}
          >
            <option disabled value="">
              {lang == "es" ? "Elige una categoría" : "Select a category"}
            </option>
            <option value="Salud">{lang == "es" ? "Salud" : "Health"}</option>
            <option value="Crecimiento">{lang == "es" ? "Crecimiento Personal" : "Personal growth"}</option>
            <option value="Esparcimiento">{lang == "es" ? "Esparcimiento" : "Recreation"}</option>
          </select>
          <button type="submit" className="btn btn-violeta">
            {lang == "es" ? "Crear" : "Create"}
          </button>
        </div>
      </form>
      <div className="main">
        <div className="main-container">
          <section className="container">
            <div>
            <h2 className="titulo">{lang == "es" ? "Proyectos" : "Projects"}</h2>
            </div>
            <ProjectList
              projects={data}
              dispatch={dispatch}
              diaActual={diaActual}
              cardHeights={cardHeights}
              setCardHeights={setCardHeights}
            />
          </section>
          <section className="container">
            <h2 className="titulo">{lang == "es" ? "Progresión" : "Progress"}</h2>
            <ProjectProgressList data={data.filter((p)=> p.archivado == false)} diaActual={diaActual} />
          </section>
        </div>
      </div>
    </div>
  );
}
