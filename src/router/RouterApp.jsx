import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../components/Home"
import { Layout } from "../components/Layout"

// 1. BrowserRouter habilita el historial de navegación del navegador, (posibilidad de leer el path de una URL).
// 2. Routes es quien contiene el conjunto de rutas.
// 3. Route define la ruta (path='/') exacta de un componente (element={<Componente />}).
// 4. Importar en el main.jsx el enrutado <RouterApp />

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Layout" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }