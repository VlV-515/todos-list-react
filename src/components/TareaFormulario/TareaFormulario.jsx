import React from 'react'
import './TareaFormulario.css'

function TareaFormulario(props) {
  return (
    <div className='tarea-formulario'>
      <input
        className='tarea-input'
        type='text'
        placeholder='Añade una tarea'
        name='texto'
      />
      <button className='tarea-boton'>Añadir tarea</button>
    </div>
  )
}

export default TareaFormulario
