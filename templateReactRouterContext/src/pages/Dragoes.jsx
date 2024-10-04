import Navbar from '../components/Navbar'
import {useContext} from 'react'
import { GlobalContext } from '../contexts/GlobalContext'


function Dragoes() {
    const {diaDeHoje, setDiaDeHoje} = useContext(GlobalContext)

    function trocarDia(){
       let dia = prompt('Que dia é hoje')
        setDiaDeHoje(dia)
    }
  return (
    <div>
      <Navbar/>
      <h1>Dragões</h1>
      <p>porque eles são legais 🐉, menos na {diaDeHoje}</p>
      <img src="https://img.quizur.com/f/img62a661a412cf07.63479139.jpg?lastEdited=1655071199?o=feed" alt="" />
      <button onClick={trocarDia}> trocar dia</button>
    </div>
  )
}

export default Dragoes
