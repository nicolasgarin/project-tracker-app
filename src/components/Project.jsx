import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { ACCIONES } from '../App'

export default function Project({ data, nuevoSubP, setNuevoSubP, dispatch, diaActual }) {
  const { id } = useParams()
  const [proyecto, setProyecto] = useState(data.filter(proyecto => proyecto.id == id)[0])
  const [idSubP, setIdSubP] = useState()

  useEffect(() => {
    setProyecto(data.filter(proyecto => proyecto.id == id)[0])
  }, [data])

  function handleSubP(e) {
    e.preventDefault()
    dispatch({ tipo: ACCIONES.AGREGAR_SUBPROYECTO, payload: { nombre: nuevoSubP, id: id } })
    setNuevoSubP('')
  }

  return (
    <>
      <div className='main project'>
        <div className='container'>
          <div className="d-flex align-items-center justify-content-between">
            <h2 className='titulo'>{proyecto.nombre}</h2>
            <form className='form-nueva-subcat' onSubmit={handleSubP}>
              <div className='container d-flex align-items-center justify-content-end'>
                <label className='form-label' htmlFor="item">Nuevo Subproyecto</label>
                <input required className='input-form' type="text" value={nuevoSubP} onChange={e => setNuevoSubP(e.target.value)} id="item" />
                <button type="submit" className="btn btn-delete">Crear</button>
              </div>
            </form>
          </div>
          <div className='subcat-list'>
            {proyecto.subcategorias.map(subcat => {
              return <div className='subcat d-flex align-items-center mb-2'>
                <div id={subcat.idSubcat} key={subcat.idSubcat}>{subcat.nombreSubcat}{subcat.diasCheckeados.map(dia=>{return <div>{dia}</div>})}</div>
                <input
                      checked={subcat.diasCheckeados.includes(diaActual)}
                      onClick={() =>
                        dispatch({
                          tipo: ACCIONES.ACTUALIZAR_SUBPROYECTO,
                          payload: { id: proyecto.id, idSubP: subcat.idSubcat },
                        })
                      }
                      type="checkbox"
                    ></input>
                <button onClick={() => dispatch({ tipo: ACCIONES.BORRAR_SUBPROYECTO, payload: { id: id, idSubP: subcat.idSubcat } })} className='btn btn-delete'>Borrar</button>
              </div>
            })}
          </div>
          <Link to={"/"}>
            <button className='btn btn-celeste'>Volver</button>
          </Link>


        </div>
      </div>
    </>
  )
}
