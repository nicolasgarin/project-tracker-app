import React, { useEffect, useState } from "react";
import { useUserOptions } from "../context/UserOptionsContext";

export default function ProjectStats({ project }) {
  const [stats, setStats] = useState();
  const { lang } = useUserOptions();

  useEffect(() => {
    statsUpdate();
  }, [project]);

  function statsUpdate() {
    let cantDias = 0;
    let cantDiasStatus0 = 0;
    let cantDiasStatus1 = 0;
    let cantDiasStatus2 = 0;
    let cantDiasStatus3 = 0;
    let dia = project.fechaCreacion.split("-")[2];
    let mes = project.fechaCreacion.split("-")[1];
    let ano = project.fechaCreacion.split("-")[0];
    let creacion = dia + "/" + mes + "/" + ano;
    project.subcategorias.forEach((sub) => {
      cantDias += sub.diasCheckeados.length;
      cantDiasStatus0 += sub.diasCheckeados.filter(
        (dia) => dia.status === 0
      ).length;
      cantDiasStatus1 += sub.diasCheckeados.filter(
        (dia) => dia.status === 1
      ).length;
      cantDiasStatus2 += sub.diasCheckeados.filter(
        (dia) => dia.status === 2
      ).length;
      cantDiasStatus3 += sub.diasCheckeados.filter(
        (dia) => dia.status === 3
      ).length;
    });
    setStats({
      creacion: creacion,
      cantSubproyectos: project.subcategorias.length,
      cantActivos: project.subcategorias.filter((sub) => !sub.cerrada).length,
      cantCerradas: project.subcategorias.filter((sub) => sub.cerrada).length,
      logros: project.logros.length,
      cantDiasCheckeados: cantDias,
      cantDiasStatus0: cantDiasStatus0,
      cantDiasStatus1: cantDiasStatus1,
      cantDiasStatus2: cantDiasStatus2,
      cantDiasStatus3: cantDiasStatus3,
    });
  }

  return (
    <>
      <div className="stats-tab">
        <div className="content d-flex">
          <div className="section-1 texto-imp">
            <div className="subsect">
              <div>
                {lang === "es" ? "Fecha de creación:" : "Creation date:"}{" "}
                {stats?.creacion}
              </div>
              <div>
                {lang === "es" ? "Tipo:" : "Type:"} {project?.tipo}
              </div>
            </div>
            <div className="subsect">
              <div className="subtitulo">
                {lang === "es" ? "Subproyectos:" : "Subprojects:"}
              </div>
              <div>Total: {stats?.cantSubproyectos}</div>
              <div>
                {lang === "es" ? "Activos:" : "Active:"} {stats?.cantActivos}
              </div>
              <div>
                {lang === "es" ? "Cerrados:" : "Closed:"} {stats?.cantCerradas}
              </div>
            </div>
            <div className="subsect">
              <div className="subtitulo">
                {lang === "es" ? "Logros" : "Achievements"}
              </div>
              <div>Cantidad: {stats?.logros}</div>
            </div>
          </div>
          <div className="section-2 texto-imp">
            <div className="subsect">
              <div className="subtitulo">Días dedicados</div>
              <div className="total">Total: {stats?.cantDiasCheckeados}</div>
              <div className="row rg-10">
                <div className="d-flex col-6 align-items-center g-15">
                  <div className="celda check-1"></div>
                  {stats?.cantDiasStatus0}
                </div>
                <div className="d-flex col-6 align-items-center g-15">
                  <div className="celda check-2"></div>
                  {stats?.cantDiasStatus2}
                </div>
                <div className="d-flex col-6 align-items-center g-15">
                  <div className="celda check-3"></div>
                  {stats?.cantDiasStatus2}
                </div>
                <div className="d-flex col-6 align-items-center g-15">
                  <div className="celda check-4"></div>
                  {stats?.cantDiasStatus3}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
