import { useEffect, useState } from "react"
import LayoutDefault from "../layouts/LayoutDefault"
import Api from '../config/Api'
import { useNavigate, useParams } from "react-router-dom"
import { Form, Formik, ErrorMessage, Field } from "formik"
import * as Yup from 'yup'
import Message from "../config/Message"

const FormUsuarios = () => {
    
    const navigate = useNavigate();
    const params = useParams();

    const [data, setData] = useState({
            nome: '',
            email: '',
            senha: '',
            permissao: '',
    })

    async function salvarDados(values, form) {
        if(params.id) {
            // Editar
            await Api.put(`usuarios/${params.id}`, values);
            Message.success("Usuário Atualizado com Sucesso.")
            form.resetForm()
        } else {
            // Salvar
            await Api.post('usuarios', values);
            Message.success("Usuário Salvo com Sucesso.")
            form.resetForm()
        }
        navigate('/usuarios')
    }

    async function getData() {
        if(params.id) {
            const response = await Api.get(`usuarios/${params.id}`);
            setData(response.data)
        }
    }

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Campo Obrigatório'),
        email: Yup.string().email('E-mail inválido').required('Campo Obrigatório'),
        senha: Yup.string().required('Campo Obrigatório')
        .min(6, 'Informe pelo menos 6 caracteres.')
        .max(10, 'Informe no máximo 10 caractere')
    })

    useEffect(() => {
        getData();
    }, []);

    console.log(data)
    return (
        <LayoutDefault>
            Formulário de Usuarios
            <Formik
                enableReinitialize
                initialValues={data}
                validationSchema={validationSchema}
                onSubmit={(values, form) => {
                    salvarDados(values, form)
                }}
            >   
                {({ handleChange, values }) => (
                    <Form>
                        <div>
                            <label htmlFor="">Nome</label>
                            <Field 
                                type="text" 
                                className="form-control" 
                                name="nome" 
                            />
                            <div className="error">
                                <ErrorMessage name="nome" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">E-mail</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="email" 
                                value={values.email}
                                onChange={handleChange} 
                            />
                            <div className="error">
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">Senha</label>
                            <input 
                                type="senha" 
                                className="form-control" 
                                name="senha" 
                                value={values.senha}
                                onChange={handleChange} 
                            />
                            <div className="error">
                                <ErrorMessage name="senha" />
                            </div>
                        </div>

                        <div className="mt-3">
                            <label htmlFor="">Permissão</label>
                           <select 
                             value={values.permissao}
                             onChange={handleChange} 
                           name="permissao" id="permissao" className="form-control">
                            <option value="">Selecione</option>
                            <option value="admin">Admin</option>
                            <option value="client">Cliente</option>
                           </select>
                            <div className="error">
                                <ErrorMessage name="permissao" />
                            </div>
                        </div>

                        <div className="mt-3 d-flex justify-content-end">
                            <button className="btn btn-success btn-sm">Salvar</button>
                            &nbsp;
                            <button 
                                type="button"
                                className="btn btn-warning btn-sm"
                                onClick={() => navigate('/usuarios')}>
                                Cancelar
                            </button>
                        </div>

                    </Form>
                )}
            </Formik>


          
        </LayoutDefault>
    )
}
export default FormUsuarios