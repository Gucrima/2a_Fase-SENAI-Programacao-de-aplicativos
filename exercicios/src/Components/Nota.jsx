import React from 'react'
import { useState } from "react"
import './Media.css'

function Nota() {

    const  [resultado, setResultado] = useState()

  return (
    <div className='nota-conteiner'>
        <h2>medir a nota</h2>
        <button onClick={media}>Clique para medir sua nota!</button>

      
    </div>
  )
}

export default Nota
