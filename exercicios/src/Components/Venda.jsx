import React from 'react'
import { useState } from "react"
import './Media.css'
function Venda() {

    const  [resultado, setResultado] = useState()

    function calcular(){
     let valorProduto = Number(prompt('digite o valor do produto em (R$): '))
     let valorVenda, valorLucro

     if(valorProduto > 0 && valorProduto < 20){

        valorLucro = valorProduto * 0.45
        valorVenda = valorProduto + valorLucro

     }else if(valorProduto >= 20){

        valorLucro = valorProduto * 0.30
        valorVenda = valorProduto + valorLucro

    }else{

        setResultado('valor invalido!')
        exit(0)
    }

    setResultado(`${valorVenda.toFixed(2)} esse é o valor da venda`)
     
    }



  return (
    <div className='venda-conteiner'>
        <h2>Venda de Produto</h2>
        <button onClick={calcular}>calcular venda</button>
      {resultado}
    </div>
  )
}

export default Venda
