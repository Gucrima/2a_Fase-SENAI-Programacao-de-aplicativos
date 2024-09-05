import { useState } from "react"
import './media.css'
function Media() {
    const [resultado, setResultado] = useState()

    function calcular(){
        let num1 = Number(prompt("digite o primeiro número: "))
        let num2 = Number(prompt("digite o segundo número: "))
        let media = (num1 + num2)/2
        setResultado(media)
    }


  return (
    <div className="Media-conteiner">
      <h2>Exercício para calcular média de 2 números</h2>
      <button onClick={calcular}>Calcular</button><br />

      media: {resultado}
    </div>
  )
}

export default Media
