import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './TareaFormulario.css'

function TareaFormulario(props) {
  const [input, setInput] = useState('')
  const manejarCambio = (e) => {
    setInput(e.target.value)
  }

  const enviarTarea = (e) => {
    e.preventDefault()
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      isCompletada: false,
    }
    props.agregarTarea(tareaNueva)
  }
  return (
    <form className='tarea-formulario' onSubmit={enviarTarea}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Añade una tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>Añadir tarea</button>
    </form>
  )
}

export default TareaFormulario
