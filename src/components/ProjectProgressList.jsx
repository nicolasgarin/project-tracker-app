import React, { useState } from 'react'
import { v4 as uuidv4 } from "uuid";


export default function ProjectProgressList({ projects }) {
    const [cantDias, setCantDias] = useState(30)
    var celdas = []
    var celdasMes = []

    for (let i = 1; i <= cantDias; i++) {
        celdas.push(<div className={'celda'}></div>);
    }

    for (let i = 1; i <= cantDias; i++) {
        celdasMes.push(<div className={'celda num d-flex justify-content-center'}>{i}</div>);
    }

    return (
        <div className='card-container'>
          {new Date().getMonth()+1 == 11 ? <div className='d-flex'><div className='message nombre-fila'>Noviembre</div> <div className='tabla-dias d-flex'>{celdasMes}</div></div> : <div></div>}
            {projects.length > 0 ? projects.map(categoria => {
                return <div className='prog-table-item d-flex align-items-center' key={uuidv4()}>
                    <div className='nombre-fila'>{categoria.nombre}</div>
                    <div className='tabla-dias d-flex'>
                        {celdas}
                    </div>
                </div>
            }) : <div className='message'>Ingrese nuevos proyectos</div>}
        </div>
    )
}
