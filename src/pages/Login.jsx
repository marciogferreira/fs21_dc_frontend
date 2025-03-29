import { useContext } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Api from "../config/Api";
import { Field, Form, Formik } from "formik";

function LoginPage() {
    const { setIsLogged, setUser }  = useContext(AuthContext)

    const navigate = useNavigate()

    async function login(values) {
        const response = await Api.get(`users?email=${values.email}&password=${values.password}`);
        if(response.data.length > 0) {
            const dados = response.data[0];
            setUser(dados);
            setIsLogged(true)
            navigate('/')
        } else {
            alert("E-mail ou Senha Incorretos!")
        }
        
    }

    return (
        <>
            <Container>
                <div className="row">
                    <div className="mt-5 col-md-4 offset-md-4">
                        <h4>Login</h4>
                        <Formik
                            initialValues={{
                                email: '', 
                                password: ''
                            }}
                            onSubmit={values => {
                                login(values)
                            }}
                        >
                            <Form>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <Field 
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        name="email"
                                        placeholder="Digite seu e-mail" 
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Senha</label>
                                    <Field type="password" name="password" className="form-control" id="password" placeholder="Digite sua senha" />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-primary">Login</button>
                                <p className="mt-3">Não possui uma conta? <a href="#">Cadastre-se</a></p>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </Container>                    
        </>
    )
}

export default LoginPage;