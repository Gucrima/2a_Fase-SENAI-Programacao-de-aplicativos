import React from 'react'
import { useState } from "react"
import './Media.css'

function Nota() {

    const  [resultado, setResultado] = useState()

    function media(){

      let notaUm, notaDois
      let totalNota

      notaUm = Number(prompt('digite sua primeira nota: '))
      notaDois = Number(prompt('digite sua segunda nota: '))
      totalNota = (notaUm + notaDois) / 2

      switch(true){

        case totalNota >= 0 && totalNota <= 4:
          setResultado('sua nota é E')

          case totalNota > 4 && totalNota <= 6:
            setResultado('sua nota é D')

            case totalNota > 6 && totalNota <= 7.5:
              setResultado('sua nota é C')

              case totalNota > 7.5 && totalNota <= 9:
                setResultado('sua nota é B')

                case totalNota > 9 && totalNota <= 10:
                  setResultado('sua nota é A')

        default:
          setResultado('notas invalidas!')


      }


    }

  return (
    <div className='nota-conteiner'>
        <h2>medir a nota</h2>
        <button onClick={media}>Clique para medir sua nota!</button>

      {resultado}
    </div>
  )
}

export default Nota
