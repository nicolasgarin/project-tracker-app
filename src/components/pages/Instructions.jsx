import React from "react";
import { useUserOptions } from "../../context/UserOptionsContext";

export default function Instructions() {
  const { theme, lang } = useUserOptions();
  return (
    <>
      <div className={`instructions ${theme}`}>
        <div className="container main texto-imp">
          <div className="seccion">
            <h2 className="titulo">¿Qué es Project Tracker?</h2>
            <p>
              Project tracker es una aplicación creada para la planificación y
              gestión de proyectos. Fue pensada para lograr mantener motivación
              y control al momento de iniciar y manejar proyectos de todo tipo.
            </p>
          </div>
          <div className="seccion row">
            <div className="col-6">
            <h2 className="titulo">Estructura de proyectos</h2>
            <p>
              Cada gran proyecto puede ser dividido en subproyectos o tareas
              menores, donde aplicando pequeños o grandes esfuerzos diarios nos
              acercarán a cumplir nuestras metas y proyectos generales.
            </p>
            <p>
              En la página principal se podrán ver tanto los proyectos actuales
              como los proyectos inactivos, así como un calendario donde se
              podrán visualizar los esfuerzos y avances diarios dedicados a cada
              uno de ellos.
            </p>
            </div>
          </div>
          <div className="seccion">
            <h2 className="titulo">¿Qué significan los colores del calendario?</h2>
            <p>
              Cada vez que se dedique un tiempo o esfuerzo a una tarea de un
              proyecto, se podrá asignar un color a la celda junto al nombre del
              subproeyecto, simbolizado con tres tonos distintos de verde que
              representan el tiempo o esfuerzo dedicado. Un color extra es
              designado para simbolizar los eventos o fechas trascendentales
              para el curso del subproyecto.
            </p>
          </div>
          <div className="seccion">
            <h2 className="titulo">Ciclo de los subproyectos y logros</h2>
            <p>
              Cuando una tarea o subproyecto ha llegado a su fin, la misma puede
              cerrarse y se visualizará su información en la sección
              correspondiente, con la posibildad de volver a activarlos en caso
              de que sea necesario.
            </p>
            <p>
              A su vez, para cada proyecto podemos crear logros que permanecerán
              guardados para visualizar la conquista de diferentes objetivos del
              proyecto.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
