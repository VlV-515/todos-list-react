import React from 'react'
import './Tarea.css'
import { MdDeleteForever } from 'react-icons/md'

function Tarea({ id, texto, isCompletada, competarTarea, eliminarTarea }) {
  return (
    <div
      className={
        isCompletada ? 'tarea-contenedor completada' : 'tarea-contenedor'
      }
    >
      <div className='tarea-texto' onClick={() => competarTarea(id)}>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'>
        <MdDeleteForever
          className='tarea-icono'
          onClick={() => eliminarTarea(id)}
        />
      </div>
    </div>
  )
}

export default Tarea
