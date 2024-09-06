import React from 'react'
import { useState } from "react"
import './Media.css'

function StarUber() {

    const  [resultado, setResultado] = useState()

    function calcularTempo(){

        let velocidadeDaLuz = 300000
        let distanciaViagem = Number(prompt("Digite o valor de (Km) que deseja percorrer: "))
        let tempoViagem = distanciaViagem / velocidadeDaLuz
        let unidadeMedida
        
        switch(true){
            case tempoViagem > 0 && tempoViagem < 60:
              unidadeMedida = "segundo(s)"
            break;

            case tempoViagem >= 60 && tempoViagem < 60*60:
                tempoViagem = tempoViagem / 60
                unidadeMedida = "minuto(s)"
            break;
        
            case tempoViagem >= 60*60 && tempoViagem < 60*60*24:
                tempoViagem = tempoViagem / (60*60)
                unidadeMedida = "hora(s)"
            break;

            case tempoViagem >= 60*60*24 && tempoViagem < 60*60*24*30:
                tempoViagem = tempoViagem / (60*60*24)
                unidadeMedida = "Dia(s)"
            break;

            case tempoViagem >= 60*60*24*30 && tempoViagem < 60*60*24*365:
                tempoViagem = tempoViagem / (60*60*24*30)
                unidadeMedida = "mês(s)"
            break;

            case tempoViagem >= 60*60*24*365:
                tempoViagem = tempoViagem / (60*60*24*365)
                unidadeMedida = "ano(s)"
            break;

            default:
                setResultado('distãncia inválida!')
                exit(0)
            
        }

        setResultado(`sua vigem deu ${tempoViagem} ${unidadeMedida}`)


    }

  return (
    <div className='uber-conteiner'>
        <h2>Uber das Estrelas</h2>
        <button onClick={calcularTempo}>clique para a viagem</button>
        <div>
            {resultado}
        </div>
      
    </div>
  )
}

export default StarUber
