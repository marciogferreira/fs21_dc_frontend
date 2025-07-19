import { useContext, useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import Api from '../config/Api'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import Message from "../config/Message"

const Usuarios = () => {

    const[lista, setLista] = useState([])
    const navigate = useNavigate()
    const { setLoading } = useContext(AuthContext);
    
    async function getLista() {
        try {
            setLoading(true);
            const response = await Api.get('usuarios')
            setLista(response.data)
        } catch(e) {

        } finally {
            setLoading(false);
        }
    }

    async function deletarItem(id) {
        try {
            Message.confirmation("Deseja deletar este usuário?", async () => {
                await Api.delete(`usuarios/${id}`)
                Message.success("Usuário Deletado com Sucesso.")
                getLista()
            })
        } catch(error) {
            alert("Erro ao deletar usuário. " + error.message)
        }
    }

    useEffect(() => {
       getLista() 
    }, []);

    return (
        <LayoutDefault>
            
            <div className="d-flex justify-content-between">
                <h4>Usuarios</h4>
                <button onClick={() => navigate('/usuarios/novo')} className="btn btn-success btn-sm">
                    Novo Usuário
                </button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                            <td>
                                <button type="button" className="btn btn-primary" onClick={() => navigate(`/usuarios/editar/${item.id}`)}>Editar</button>
                                &nbsp;
                                <button type="button" className="btn btn-danger" onClick={() => deletarItem(item.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </LayoutDefault>
    )
}

export default Usuarios