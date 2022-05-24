import React from 'react'
import './Tarea.css'
import { MdDeleteForever } from 'react-icons/md'

function Tarea({ texto, isCompletada }) {
  return (
    <div
      className={
        isCompletada ? 'tarea-contenedor completada' : 'tarea-contenedor'
      }
    >
      <div className='tarea-texto'>{texto}</div>
      <div className='tarea-contenedor-iconos'>
        <MdDeleteForever className='tarea-icono' />
      </div>
    </div>
  )
}

export default Tarea
