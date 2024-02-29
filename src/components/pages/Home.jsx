import React from 'react'
import '../../main.scss'
import ProjectList from '../ProjectCardList'
import { ACCIONES } from '../../App';
import NewProject from '../NewProject';
import ProjectProgressList from '../ProjectProgressList';

export default function Home({ data, dispatch, nuevoP, setNuevoP, nuevoT, setNuevoT, newProjectEl, diaActual }) {

  function handleSubmit(e) {
    e.preventDefault()
    dispatch({ tipo: ACCIONES.AGREGAR_PROYECTO, payload: { nombre: nuevoP, tipo: nuevoT } })
    setNuevoP('')
    setNuevoT('')
  }

  return (
    <>
      <form className='form-nuevo' onSubmit={handleSubmit}>
        <div className='container d-flex align-items-center justify-content-end'>
          <label className='form-label' htmlFor="item">Nuevo proyecto</label>
          <input required className='input-form' type="text" value={nuevoP} onChange={e => setNuevoP(e.target.value)} id="item" ref={newProjectEl} />
          <label className='form-label' htmlFor="categoria">Categoría</label>
          <select required id='categoria' className='input-form select' type='select' value={nuevoT} onChange={e => setNuevoT(e.target.value)} >
            <option disabled value="">Elige una categoría</option>
            <option value="salud">Salud</option>
            <option value="crecimiento">Crecimiento</option>
            <option value="esparcimiento">Esparcimiento</option>
          </select>
          <button type="submit" className="btn btn-delete">Crear</button>
        </div>
      </form>
      <div className='main'>
        <div className='container'>
          <h2 className='titulo'>Proyectos</h2>
          <ProjectList projects={data} dispatch={dispatch} diaActual={diaActual} />
          <h2 className='titulo'>Progresión</h2>
          <ProjectProgressList projects={data} />
        </div>
      </div>
    </>
  )
}

