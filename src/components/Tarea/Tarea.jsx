import React from 'react'
import './Tarea.css'
import { MdDeleteForever } from 'react-icons/md'

function Tarea({ id, texto, isCompletada, completarTarea, eliminarTarea }) {
  return (
    <div
      className={
        isCompletada ? 'tarea-contenedor completada' : 'tarea-contenedor'
      }
    >
      <div className='tarea-texto' onClick={() => completarTarea(id)}>
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
