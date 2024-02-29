import React from 'react'
import ProjectCard from './ProjectCard'

export default function ProjectList({ projects, dispatch, diaActual }) {
    return (
        <>
            <div className='card-container d-flex'>
                <div className='row'>
                    {projects.length > 0 ? projects.map(categoria => {
                        return <ProjectCard project={categoria} key={categoria.id} dispatch={dispatch} diaActual={diaActual} />
                    }) : <div className='message'>Ingrese nuevos proyectos</div>}
                </div>
            </div>
        </>
    )
}