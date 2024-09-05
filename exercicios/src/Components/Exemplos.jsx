import { useState } from "react"
import './media.css'


function Exemplos() {

    const [resultado, setResultado] = useState(0)

    function diminuir(){
        setResultado(resultado - 1)
    }

    function aumentar(){
        setResultado(resultado + 1)
    }

  return (
    <div className="Contador-conteiner">
        <h2>Exercício Contador (Exemplo)</h2>
      {<button onClick={diminuir} >-1</button>}
      {resultado}
      {<button onClick={aumentar} >+1</button>}
    </div>
  )
}

export default Exemplos
