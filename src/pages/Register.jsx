import { Layout } from "../components/Layout"

const Register = () => {

  return (

    <Layout>
      <div>
        <h1>Registrarse</h1>
        <form>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              placeholder="Ingrese su nombre"
            />
          </div>

          <div>
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su correo"
            />
          </div>

          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirmar contraseña:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirme su contraseña"
            />
          </div>

          <button type="submit">Crear cuenta</button>
        </form>
      </div>
    </Layout>

  )

}
export { Register }