import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext';
// https://dontpad.com/fs21
const Menu = () => {
    const { logout } = useContext(AuthContext)
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">LojaVirtualDC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>Painel</Link>
                        <NavDropdown title="Cadastros" id="basic-nav-dropdown">
                            <Link to="/produtos" className='nav-link'>Produtos</Link>
                            <Link to="/autores" className='nav-link'>Autores</Link>
                            <Link to="/usuarios" className='nav-link'>Usuários</Link>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <a href='#' onClick={() => logout()} className='nav-link'>Sair</a>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Menu