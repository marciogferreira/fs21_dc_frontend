import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Painel from '../pages/Painel';
import Produtos from '../pages/Produtos';
import Usuarios from '../pages/Usuarios';
import FormUsuarios from '../pages/FormUsuarios';
import VitrinePage from '../pages/Vitrine';
import HomePage from '../pages/Home';
import LoginPage from '../pages/Login';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

function PrivateRoute({ children }) {
    const { isLogged } = useContext(AuthContext)

    if(isLogged) {
        return children
    }
    
    return <Navigate to="/login" />
}

function AppRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/vitrine' element={<VitrinePage />} />
                    <Route path='/login' element={<LoginPage />} />

                    <Route path='/' element={<PrivateRoute><Painel /></PrivateRoute>} />
                    <Route path='/produtos' element={<PrivateRoute><Produtos /></PrivateRoute>} />
                    <Route path='/usuarios' element={<PrivateRoute><Usuarios /></PrivateRoute>} />
                    <Route path='/usuarios/novo' element={<PrivateRoute><FormUsuarios /></PrivateRoute>} />
                    <Route path='/usuarios/editar/:id' element={<PrivateRoute><FormUsuarios /></PrivateRoute>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoutes;