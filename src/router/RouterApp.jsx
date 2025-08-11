import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Dashboard } from "../pages/Dashboard"
import { NotFound } from "../pages/NotFound"
import { Register } from "../pages/Register"


// 1. BrowserRouter habilita el historial de navegación del navegador, (posibilidad de leer el path de una URL).
// 2. Routes es quien contiene el conjunto de rutas.
// 3. Route define la ruta (path='/') exacta de un componente (element={<Componente />}).
// 4. Importar en el main.jsx el enrutado <RouterApp />

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }