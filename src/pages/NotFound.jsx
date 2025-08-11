import { Layout } from "../components/Layout"
import { Link } from "react-router-dom"
const NotFound = () => {

  return (

    <div>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La página que buscas no existe, Verifica la URL o volve al inicio</p>
      <Link to="/">Volver al inicio</Link>
    </div>

  )

}
export { NotFound }