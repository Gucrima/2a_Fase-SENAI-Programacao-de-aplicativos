import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/generica">Genérica</Link>
        <Link to="/final">Final</Link>
        <Link to="/Exercicío">Números 7.12</Link>
        <Link to="/DoisN">Números 7.13 & 7.14</Link>
        <Link to="/Algoritimos">Algoritimos 7.15</Link>
    </nav>
  )
}

export default Navbar
