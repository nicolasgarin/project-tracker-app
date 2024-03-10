import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectList({
  projects,
  dispatch,
  diaActual,
  cardHeights,
  setCardHeights,
}) {
  const [height, setHeight] = useState();
  useEffect(setMaxHeight, [cardHeights]);

  function setMaxHeight() {
    setHeight(Math.max(...cardHeights));
  }

  return (
    <>
      <div className="card-container d-flex">
        <div className="row">
          {projects.length > 0 ? (
            projects.map((categoria) => {
              return (
                <ProjectCard
                  project={categoria}
                  key={categoria.id}
                  dispatch={dispatch}
                  diaActual={diaActual}
                  setCardHeights={setCardHeights}
                  height={height}
                />
              );
            })
          ) : (
            <div className="message">Ingrese nuevos proyectos</div>
          )}
        </div>
      </div>
    </>
  );
}
