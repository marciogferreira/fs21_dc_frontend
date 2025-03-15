import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import Api from '../config/Api'
const Usuarios = () => {

    const[lista, setLista] = useState([])

    async function getLista() {
        // const response = await fetch('https://fakestoreapi.com/users')
        // const dados = await response.json()
        // setLista(dados)

        const response = await Api.get('users')
        setLista(response.data)
    }

    useEffect(() => {
       getLista() 
    }, []);

    return (
        <LayoutDefault>
            Usuarios
            
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Endereço</th>
                        <th>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode}
                            </td>
                            <td>
                                <button type="button" className="btn btn-primary">Editar</button>
                                <button type="button" className="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </LayoutDefault>
    )
}

export default Usuarios