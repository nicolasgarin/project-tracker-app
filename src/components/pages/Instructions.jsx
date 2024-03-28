import React from "react";
import { useUserOptions } from "../../context/UserOptionsContext";
import img1 from "../../../public/inst-1.svg";
import img1en from "../../../public/inst-1-en.svg";
import img2 from "../../../public/inst-2.svg";
import img2en from "../../../public/inst-2-en.svg";

export default function Instructions() {
  const { theme, lang } = useUserOptions();
  return (
    <>
      <div className={`instructions ${theme}`}>
        <div className="container main texto-imp">
          <div className="seccion">
            <h2 className="titulo text-center">{lang == "es" ? "¿Qué es Project Tracker?" : "What is Project Tracker?"}</h2>
            <p>
              {lang == "es" ? "Project tracker es una aplicación creada para la planificación y gestión de proyectos. Fue pensada para lograr mantener motivación y control al momento de iniciar y manejar proyectos de todo tipo." : "Project tracker is an application created for project planning and management. It was designed to maintain motivation and control when initiating and managing projects of all types."}
            </p>
          </div>
          <div className="seccion row">
            <div className="col-6 d-flex flex-column justify-content-center">
              <h2 className="titulo text-center">{lang == "es" ? "Estructura de proyectos" : "Project structure"}</h2>
              <p>
                {lang == "es" ? "Cada gran proyecto puede ser dividido en subproyectos o tareas menores, donde aplicando pequeños o grandes esfuerzos diarios nos acercarán a cumplir nuestras metas y proyectos generales." : "Each big project can be divided into smaller subprojects or smaller tasks, where applying small or large daily efforts will allow us to achieve our goals and general projects."}
              </p>
              <p>
                {lang == "es" ? "En la página principal se podrán ver tanto los proyectos actuales como los proyectos inactivos, así como un calendario donde se podrán visualizar los esfuerzos y avances diarios dedicados a cada uno de ellos." : "In the main page, you can see both active and inactive projects as well as a calendar where you can visualize the daily efforts and progress dedicated to each one of them."}
              </p>
            </div>
            <div className="col-6 d-flex align-items-center justify-content-center">
              <img className="img img-1" src={lang == "es" ? img1 : img1en} />
            </div>
          </div>
          <div className="seccion row">
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
          <img className="img img-2" src={lang == "es" ? img2 : img2en} />
            </div>
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className="titulo text-center">
              {lang == "es" ? "¿Qué significan los colores del calendario?" : "What does the colors of the calendar mean?"}
            </h2>
            <p>
              {lang == "es" ? "Cada vez que se dedique un tiempo o esfuerzo a una tarea de un proyecto, se podrá asignar un color a la celda junto al nombre del subproeyecto, simbolizado con tres tonos distintos de verde que representan el tiempo o esfuerzo dedicado. Un color extra es designado para simbolizar los eventos o fechas trascendentales para el curso del subproyecto." : "Each time effort or time is spent on a project task, a color can be assigned to the cell next to the subproject name, symbolized by three different shades of green representing the time or effort spent. An additional color is designated to symbolize events or dates important to the course of the subproject."}
            </p>
            </div>
          </div>
          <div className="seccion row">
          <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            <h2 className="titulo">{lang == "es" ? "Ciclo de subproyectos y logros" : "Subprojects and achievments cycle"}</h2>
            <p>
              {lang =="es" ? "Cuando una tarea o subproyecto ha llegado a su fin, la misma puede cerrarse y se visualizará su información en la sección correspondiente, con la posibildad de volver a activarlos en caso de que sea necesario." : "When a task or subproject has reached its end, it can be closed and its information will be displayed in the corresponding section, with the possibility to reopen it in case it is necessary."}
            </p>
            <p>
              {lang == "es" ? "A su vez, para cada proyecto podemos crear logros que permanecerán guardados para visualizar la conquista de diferentes objetivos del proyecto." : "At the same time, for each project we can create achievements that will remain stored to visualize the the conquer of different goals of the project."}
            </p>
            </div>
            <div className="col-6 d-flex flex-column align-items-center justify-content-center">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
