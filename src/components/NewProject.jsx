import React from 'react'
import { ACCIONES } from '../App'


export default function NewProject(dispatch, nuevoP, setNuevoP, nuevoT, setNuevoT, newProjectEl) {

    function handleSubmit(e) {
        e.preventDefault()
        dispatch.dispatch({ tipo: ACCIONES.AGREGAR_PROYECTO, payload: { nombre: nuevoP, tipo: nuevoT } })
        setNuevoP('')
        setNuevoT('')
    }

    return (
        <>
        {console.log(dispatch.dispatch)}
            <form className='form-nuevo' onSubmit={handleSubmit}>
                <div className='container d-flex align-items-center justify-content-end'>
                    <label className='form-label' htmlFor="item">Nuevo proyecto</label>
                    <input required className='input-form' type="text" value={nuevoP} onChange={e => setNuevoP(e.target.value)} id="item" ref={newProjectEl} />
                    <select required className='input-form select' type='select' value={nuevoT} onChange={e => setNuevoT(e.target.value)} >
                        <option disabled value="">Elige una categoría</option>
                        <option value="salud">Salud</option>
                        <option value="crecimiento">Crecimiento</option>
                        <option value="esparcimiento">Esparcimiento</option>
                    </select>
                    <button type="submit" className="btn btn-delete">Crear</button>
                </div>
            </form>
        </>

    )
}
