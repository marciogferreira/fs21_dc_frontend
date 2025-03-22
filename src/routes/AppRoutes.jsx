import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Painel from '../pages/Painel';
import Produtos from '../pages/Produtos';
import Usuarios from '../pages/Usuarios';
import FormUsuarios from '../pages/FormUsuarios';
function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Painel />} />
                    <Route path='/produtos' element={<Produtos />} />
                    <Route path='/usuarios' element={<Usuarios />} />
                    <Route path='/usuarios/novo' element={<FormUsuarios />} />
                    <Route path='/usuarios/editar/:id' element={<FormUsuarios />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;