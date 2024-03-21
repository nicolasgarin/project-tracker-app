import React from "react";
import rocket from "../assets/medals/rocket-medal.svg";
import star from "../assets/medals/star-medal.svg";
import cup from "../assets/medals/cup-medal.svg";
import ray from "../assets/medals/ray-medal.svg";
import crown from "../assets/medals/crown-medal.svg";
import plus from "../assets/medals/plus-medal.svg";

export default function Logros({ project, dispacth }) {
  function handleLogro(logro) {
    dispacth({ type: "AGREGAR_LOGRO", payload: logro });
  }

  function logoAssign(string) {
    switch (string) {
      case "rocket":
        return rocket;
      case "star":
        return star;
      case "cup":
        return cup;
      case "ray":
        return ray;
      case "crown":
        return crown;
      default:
        return null;
    }
  }

  return (
    <>
      <div className="logros d-flex row">
        {project.logros.map((logro) => {
          return (
            <div className="medal-box d-flex flex-column align-items-center col-4">
              <img
                src={logoAssign(logro.imgLogo)}
                className="medal"
                alt="project tracker logo"
              />
              <div className="medal-name texto-imp text-center">
                {logro.nombreLogro.toUpperCase()}
              </div>
            </div>
          );
        })}
        <div className="medal-box plus d-flex flex-column align-items-center col-4">
          <img src={plus} className="medal" alt="project tracker logo" />
          <div className="medal-name texto-imp text-center">
            NUEVO LOGRO
          </div>
        </div>
      </div>
    </>
  );
}
