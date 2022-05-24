import './App.css'
import Logo from './components/Logo/Logo'
import ListaDeTareas from './components/ListaDeTareas/ListaDeTareas'

//TODO: 6:07
function App() {
  return (
    <div className='container'>
      <Logo />
      <div className='tareas-lista-principal'>
        <h1>Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  )
}

export default App
