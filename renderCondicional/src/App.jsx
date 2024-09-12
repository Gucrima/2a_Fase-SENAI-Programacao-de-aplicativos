import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import PageDois from './pages/PageDois'
import PageUm from './pages/PageUm'
import Render from './pages/Render'

function App() {
  const [pagina, setPagina] = useState()
  // let idade 
  // console.log(idade)
  // console.log(pagina)
  // idade = 19
  // setPagina(19)

  return (
    <>
    <div className='conteiner-botoes'>

    <button className='botao' onClick={ () => setPagina(<Home/>)}>home</button>
    <button className='botao' onClick={ () => setPagina(<PageUm/>)}>PageUm</button>
    <button className='botao' onClick={ () => setPagina(<PageDois/>)}>PageDois</button>
    <button  className='botao' onClick={ () => setPagina(<Render/>)}>Render</button>
    </div>
    {pagina}
    </>
  )
}

export default App
