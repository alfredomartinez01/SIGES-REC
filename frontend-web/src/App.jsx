import { BrowserRouter, Routes, Route } from "react-router-dom"

/* IMPORTANDO LAYOUTS */
import AuthLayout from "./layouts/AuthLayout"
import PrincipalLayout from "./layouts/PrincipalLayout"

/* IMPORTANDO PÁGINAS */
import Login from "./pages/Login"
import Registrar from "./pages/Registrar"
import OlvidePassword from "./pages/OlvidePassword"
import Inicio from "./pages/Inicio"
import Perfil from "./pages/Perfil"

import Materiales from "./pages/Materiales"

import './assets/scss/icons.scss';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>

        {/* Rutas para autenticado del Sistema */}
        <Route path="/" element={<AuthLayout />}> 
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="olvide-password" element={<OlvidePassword />} />
        </Route>

        {/* Rutas para el sistema */}
        <Route path="siges-rec" element={<PrincipalLayout />}>
          <Route index element={<Inicio />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="materiales" element={<Materiales/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
