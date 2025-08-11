import { Layout } from "../components/Layout"
import { useState } from "react"
const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleUsername = (e) => {
    setUsername(e.target.value)
    console.log("hola")
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)

  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username, email, password)
  }


  return (

    <Layout>
      <div>
        <h1>Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input onChange={handleUsername} type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" />
          </div>

          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input onChange={handleEmail} type="email" id="email" name="email" placeholder="Ingrese su correo" />
          </div>

          <div>
            <label htmlFor="password">Contraseña:</label>
            <input onChange={handlePassword} type="password" id="password" name="password" placeholder="Ingrese su contraseña" />
          </div>


          <button type="submit">Crear cuenta</button>
        </form>
      </div>
    </Layout>

  )

}
export { Register }