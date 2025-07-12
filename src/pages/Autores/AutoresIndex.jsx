import { useEffect, useState } from "react";
import LayoutDefault from "../../layouts/LayoutDefault";
import Api from "../../config/Api";
import { useNavigate } from "react-router-dom";

export default function AutoresIndex() {

    const navigate = useNavigate();
    const [lista, setLista] = useState([]);

    async function getLista() {
        const response = await Api.get('autores');
        setLista(response.data);
    }

    useEffect(() => {
        getLista();
    }, []);

    return (
        <LayoutDefault> 
            <h4>Lista de Autores</h4> 
            <button className="btn btn-success btn-sm" onClick={() => navigate('/autores/novo')}>
                Novo Autor(a)
            </button>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Nacionalidade</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.map((item, indice) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.nacionalidade}</td>
                            <td>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </LayoutDefault>
    )
}