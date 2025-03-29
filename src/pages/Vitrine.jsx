import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CarrinhoContext } from "../App";
function VitrinePage() {

    const { carrinho, setCarrinho } = useContext(CarrinhoContext)

    const[lista, setLista] = useState([]);
    async function listarProdutos() {
        const response = await axios.get('https://fakestoreapi.com/products')
        setLista(response.data)
    }

    async function adicionarNoCarrinho(produto) {
        setCarrinho((estadoAnterior) => {
            return [...estadoAnterior, produto]
        })
    }

    useEffect(() => {
        listarProdutos()
    }, [])

    return (
        <div className="container">
            <h4>Vitrine</h4>
            <Link to="/home">Home</Link>
            <Link to="/vitrine">Produtos</Link>
            <br />
            <h4>Carrinho: Há {carrinho.length} produtos no carrinho.</h4>
            <Row xs={1} md={4} className="g-4">
                {lista.map((item) => (
                    <Col key={item.id}>
                        <Card style={{ }}>
                            <Card.Img variant="top" src={item.image} height={300} style={{ objectFit: 'cover' }} />
                            <Card.Body>
                                <Card.Title>{item.title.substring(0, 25)}...</Card.Title>
                                <Card.Text>
                                    {item.description.substring(0, 100)}...
                                </Card.Text>
                                <Card.Text>
                                    <strong>
                                        Preço: {item.price}
                                    </strong>
                                </Card.Text>
                                <Button onClick={() => adicionarNoCarrinho(item)} variant="primary">Adicionar no Carrinho</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                
            </Row>
        </div>
    )
}

export default VitrinePage;