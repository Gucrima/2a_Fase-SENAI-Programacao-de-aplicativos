
import { useState } from 'react'
import './App.css'
import Maior from './Components/Maior'
import Menor from './Components/Menor'

function App() {
const [inputIdade, setInputIdade] =  useState(0)
const [maior, setMaior] = useState(false)
const [menor, setMenor] = useState(false)

function lerIdade(){
   
  if(inputIdade >= 18){ 
   setMaior(true)
   setMenor(false)
  }else{
    setMaior(false)
    setMenor(true)
  }
}

  return (
    <>
    <div>
      <h1>Inputs</h1> 

     idade:
     <input type="number" className='formularios' value={inputIdade} onChange={(event) => {setInputIdade(event.target.value)}} />
     <button onClick={lerIdade}>Processar idade</button>
     {maior && <Maior/>}
     {menor && <Menor/>}
    </div>
    </>
  )
}

export default App
