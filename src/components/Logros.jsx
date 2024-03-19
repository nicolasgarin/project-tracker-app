import React from "react";
import rocket from "../assets/medals/rocket-medal.svg";
import star from "../assets/medals/star-medal.svg";
import cup from "../assets/medals/cup-medal.svg";
import ray from "../assets/medals/ray-medal.svg";
import crown from "../assets/medals/crown-medal.svg";

export default function Logros() {
  return (
    <>
      <div className="logros d-flex row">
        <div className="medal-box d-flex flex-column align-items-center col-4">
          <img src={rocket} className="medal" alt="project tracker logo" />
          <div className="medal-name texto-imp texto-violeta text-center">EXAMEN DEPORTE</div>
        </div>
        <div className="medal-box d-flex flex-column align-items-center col-4">
          <img src={star} className="medal" alt="project tracker logo" />
          <div className="medal-name texto-imp texto-violeta text-center">5K PARQUE ROOSVELT</div>
        </div>
        <div className="medal-box d-flex flex-column align-items-center col-4">
          <img src={cup} className="medal" alt="project tracker logo" />
           <div className="medal-name texto-imp texto-violeta text-center">1 MES CROSSFIT</div>
        </div>
        <div className="medal-box d-flex flex-column align-items-center col-4">
          <img src={ray} className="medal" alt="project tracker logo" />
          <div className="medal-name">5K Parque Roosvelt</div>
        </div>
        <div className="medal-box d-flex flex-column align-items-center col-4">
          <img src={crown} className="medal" alt="project tracker logo" />
          <div className="medal-name">5K Parque Roosvelt</div>
        </div>
      </div>
    </>
  );
}
