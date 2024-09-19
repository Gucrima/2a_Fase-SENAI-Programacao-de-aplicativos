import { useState } from "react"
import React from 'react'
import './media.css'

function Cofrinho() {

    const [resultado, setResultado] = useState()

    function Calcular(){
        let produtoX = prompt(`Qual o valor do produto que desejas comprar?: `)
        let moeda1 = prompt('Quantas moedas de 1 real você possui?: ')
        let moeda50 = prompt('Quantas moedas de 50 centavos você possui?: ')
        let moeda25 = prompt('Quantas moedas de 25 centavos você possui?: ')
        let moeda10 = prompt('Quantas moedas de 10 centavos você possui?: ')
        let moeda5 = prompt('Quantas moedas de 5 centavos você possui?: ')
        let valorTotal = (moeda1 * 1.00) + (moeda50 * 0.50) + (moeda25 * 0.25) + (moeda10 * 0.10) + (moeda5 * 0.05)

        if(produtoX > valorTotal){
          setResultado("Faça mais economias :(")  
        }else{
          setResultado("tá sobrando na carteira")
        }




    }
  return (
    <div className="Copo-conteiner">
      <h2>cofrinho 🐖</h2>
      <button onClick={Calcular}>calcular</button>
      <div>
        {resultado}
      </div>
    </div>
  )
}

export default Cofrinho
