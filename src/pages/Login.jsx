import { Container } from "react-bootstrap";
import { Field, Form, Formik, ErrorMessage } from "formik";
import Api from "../config/Api";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Message from "../config/Message";
import * as Yup from 'yup';

function LoginPage() {
    const { setIsLogged, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    async function login(values) {
        try {
            setLoading(true);
            const response = await Api.post('login', {
                email: values.email,
                senha: values.password
            });
            if(response.data.token) {
                Message.success("Login realizado com sucesso!")
                const { token } = response.data;
                localStorage.setItem('sis@biblioteca', token);
                setIsLogged(true);
                navigate('/home');
            } else {
                Message.error("Login ou Senha Incorreto!")
            }
        } catch(e) {
            console.error(e);
            
        } finally {
            setLoading(false);
        }
    }

    const schemaValidation = Yup.object().shape({
        email: Yup.string().required('Campo Obrigatório').email("E-mail Inválido"),
        password: Yup.string().required('Campo Obrigatório').min(6, 'Deve conter no mínimo 8 caracteres.')
    })

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
                            validationSchema={schemaValidation}
                            onSubmit={values => {
                                login(values);
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
                                    <span className="error">
                                        <ErrorMessage name="email" />
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Senha</label>
                                    <Field type="password" name="password" className="form-control" id="password" placeholder="Digite sua senha" />
                                    <span className="error">
                                        <ErrorMessage name="password" />
                                    </span>
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