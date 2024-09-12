import React from 'react'
import { useState } from 'react'
import Login from '../components/Login'
import PainelAdm from '../components/PainelAdm'
import ProdutosParaMaiores from '../components/ProdutosParaMaiores'
import UsuarioLogado from '../components/UsuarioLogado'


function Render() {
    const [adm, setAdm] = useState(true)
    const [idade, setIdade] = useState(0)
    const [usuario, setUsuario] = useState(false)
  return (
    <div>
        <div className='renderTexte'>
        <h1>Render</h1>
        </div>
       <div className='conteiner-botoes'>
         <button className='botao' onClick={ () => {setAdm(true)}} >adm</button>
         <button className='botao'  onClick={ () => {setAdm(false)}} >não adm</button>
         { adm && <PainelAdm/>}
       </div>

        <div className='conteiner-botoes'>
            <button className='botao' onClick={() => {setIdade(idade-1)}}>-</button>
            {idade}
            <button className='botao' onClick={() => {setIdade(idade+1)}}>+</button><br />
            { idade >= 18 && <ProdutosParaMaiores/>}

        </div>
        
        <div className='conteiner-botoes'>
          <button className='botao' onClick={() => {setUsuario(true)}}>Logar</button>
          <button className='botao' onClick={() => {setUsuario(false)}}>sair da conta</button>
          { usuario ? <UsuarioLogado/> : <Login />}
        </div>

    </div>
  )
}

export default Render
