import "../styles/components/header.css"

const Header = () => {

  return (
    <header>
      <img className="logo" src="https://www.getautismactive.com/wp-content/uploads/2021/01/Test-Logo-Circle-black-transparent.png" alt="Logo test" />
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
        <button>Cerar sesion</button>
      </ul>
    </header>
  )

}
export { Header }