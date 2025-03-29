import { useContext } from 'react'
import LayoutDefault from '../layouts/LayoutDefault'
import Menu from '../layouts/Menu'
import { AuthContext } from '../contexts/AuthContext'

const Painel = () => {
    const { user } = useContext(AuthContext)
    return (
        <LayoutDefault>
            Seja bem-vindo(a), <strong> {user && user.username}</strong>
            <h3>Painel</h3>
            <h4>Gráficos</h4>
        </LayoutDefault>
    )
}

export default Painel