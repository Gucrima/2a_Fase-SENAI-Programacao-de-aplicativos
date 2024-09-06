import { useState } from "react"
import './media.css'


function Garcon() {
  const  [resultado, setResultado] = useState()

    function emprestimo(){
      let valorSalario, valorEmprestimo, numPrestacoes
      let calculoSalario 

      valorSalario = Number(prompt('Digite seu salário'))
      if(valorSalario <= 0){
        alert('Erro tente novamente!')
        exit(0)
      }
      valorEmprestimo = Number(prompt('Digite o valor do Empréstimo'))
      if(valorEmprestimo <= 0){
        alert('Erro tente novamente!')
        exit(0)
      }
      numPrestacoes = Number(prompt('Digite o número de prestações'))
      if(numPrestacoes <= 0){
        alert('Erro tente novamente!')
        exit(0)
      }

      // calculos
      valorEmprestimo = valorEmprestimo / numPrestacoes
      calculoSalario = valorSalario * 0.3

      if(calculoSalario > numPrestacoes){
        setResultado('seu valor da prestação foi aprovado')
      }else{
        setResultado('Seu valor da prestação não foi aprovado')
      }



     
    }

  return (
    <div className="Gacon-conteiner">
      <h2>verifique seu emprestimo</h2>
      <button onClick={emprestimo}>clique para ver</button>
      <div>
      {resultado}
      </div>
    </div>
  )
}

export default Garcon
