import React, { useState } from 'react'
import TareaFormulario from '../TareaFormulario/TareaFormulario'
import Tarea from '../Tarea/Tarea'
import './ListaDeTareas.css'

function ListaDeTareas() {
  const [tareas, setTareas] = useState([])
  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea])
  }

  return (
    <>
      <TareaFormulario agregarTarea={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            isCompletada={tarea.isCompletada}
          />
        ))}
      </div>
    </>
  )
}

export default ListaDeTareas
