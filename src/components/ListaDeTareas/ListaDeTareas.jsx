import React, { useState } from 'react'
import TareaFormulario from '../TareaFormulario/TareaFormulario'
import Tarea from '../Tarea/Tarea'
import './ListaDeTareas.css'

function ListaDeTareas() {
  const [tareas, setTareas] = useState([])
  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea])
  }
  const completarTarea = (id) => {
    const arr = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.isCompletada = !tarea.isCompletada
      }
      return tarea
    })
    setTareas(arr)
  }

  const eliminarTarea = (id) => {
    const arr = tareas.filter((tarea) => tarea.id !== id)
    setTareas(arr)
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
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </div>
    </>
  )
}

export default ListaDeTareas
