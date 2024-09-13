import { useState } from 'react'
import ExercicioUm from './pages/ExercicioUm'
import './App.css'
import Home from './pages/Home'
import DiasDaSemana from './pages/DiasDaSemana'
import Conversao from './pages/Conversao'
function App() {
 
const [pagina, setPagina] = useState(<Home/>)

  return (
    <>
    <button onClick={() => {setPagina(<Conversao/>)}}>Conversor de C para F</button>
    <button onClick={() => {setPagina(<Home/>)}}>Home</button>
    <button onClick={() => {setPagina(<ExercicioUm/>)}}>Número Secreto</button>
    <button onClick={() => {setPagina(<DiasDaSemana/>)}}>Dias da Semana</button>
    {pagina}
    </>
  )
}

export default App
