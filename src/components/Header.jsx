import "../styles/components/header.css"
import { Link } from "react-router-dom"
const Header = () => {

  return (
    <header>
      <img className="logo" src="https://www.getautismactive.com/wp-content/uploads/2021/01/Test-Logo-Circle-black-transparent.png" alt="Logo test" />
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Login">Login</Link></li>
        <li><Link to="/Register">Register</Link></li>
        <li><Link to="/Dashboard">Dashboard</Link></li>
        <button>Cerar sesion</button>
      </ul>
    </header>
  )

}
export { Header }