import { useContext } from "react";
import { Spinner } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";

export default function LoadingScreen() {

    const { loading } = useContext(AuthContext);

    const style = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'fixed',
        zIndex: 10,
        width: '100%',
        background: 'rgba(0,0,0,.8)'
    }

    if(loading) {
        return (
            <div style={style}>
                <Spinner animation="grow" variant="primary" />
                <p className="text-white">Carregando...</p>
            </div>
        )
    }

    return null;
    
}