import './App.css'
import Logo from './components/Logo/Logo'
import Tarea from './components/Tarea/Tarea'
import TareaFormulario from './components/TareaFormulario/TareaFormulario'
//TODO: 6:07
function App() {
  return (
    <div className='container'>
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Tareas</h1>
        <Tarea texto='Aprender React' isCompletada={true} />
        <TareaFormulario />
      </div>
    </div>
  )
}

export default App
