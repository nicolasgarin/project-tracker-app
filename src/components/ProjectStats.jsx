import React, { useEffect, useState } from 'react'

export default function ProjectStats({ project }) {
    const [stats, setStats] = useState();

    useEffect(() => {
        statsUpdate()
    }, [project])

    function statsUpdate() {
        let cantDias = 0;
        let cantDiasStatus0 = 0;
        let cantDiasStatus1 = 0;
        let cantDiasStatus2 = 0;
        let cantDiasStatus3 = 0;
        let dia = project.fechaCreacion.split("-")[2];
        let mes = project.fechaCreacion.split("-")[1];
        let ano = project.fechaCreacion.split("-")[0];
        let  creacion = dia + "/" + mes + "/" + ano;
        project.subcategorias.forEach(sub => {
            cantDias += sub.diasCheckeados.length
            cantDiasStatus0 += sub.diasCheckeados.filter(dia => dia.status === 0).length
            cantDiasStatus1 += sub.diasCheckeados.filter(dia => dia.status === 1).length
            cantDiasStatus2 += sub.diasCheckeados.filter(dia => dia.status === 2).length
            cantDiasStatus3 += sub.diasCheckeados.filter(dia => dia.status === 3).length
        })
        setStats({
            creacion: creacion,
            cantSubproyectos: project.subcategorias.length,
            cantActivos: project.subcategorias.filter(sub => !sub.cerrada).length,
            cantCerradas: project.subcategorias.filter(sub => sub.cerrada).length,
            logros: project.logros.length,
            cantDiasCheckeados: cantDias,
            cantDiasStatus0: cantDiasStatus0,
            cantDiasStatus1: cantDiasStatus1,
            cantDiasStatus2: cantDiasStatus2,
            cantDiasStatus3: cantDiasStatus3
        })
    }

  return (
    <>
    <div className='stats-tab'>
    <div className='content d-flex'>
    <div className='section-1 texto-imp texto-celeste'>
    <div>Fecha de creación: {stats?.creacion}</div>
    <div>Subproyectos: {stats?.cantSubproyectos}</div>
    <div>Subproyectos activos: {stats?.cantActivos}</div>
    <div>Subproyectos cerrados: {stats?.cantCerradas}</div>
    <div>Cantidad de logros: {stats?.logros}</div>
    </div>
    <div className='section-2 texto-imp texto-celeste'>
    <div>Cantidad de días: {stats?.cantDiasCheckeados}</div>
    <div>Status 0: {stats?.cantDiasStatus0}</div>
    <div>Status 1: {stats?.cantDiasStatus1}</div>
    <div>Status 2: {stats?.cantDiasStatus2}</div>
    <div>Status 3: {stats?.cantDiasStatus3}</div>
    </div>
    </div>
    </div>
    </>
  )
}
