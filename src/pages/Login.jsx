import { Layout } from "../components/Layout"

const Login = () => {

  return (

    <Layout>
      <div>
        <h1>Iniciar Sesión</h1>
        <form>
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

          <button type="submit">Ingresar</button>
        </form>
      </div>
    </Layout>

  )

}
export { Login }