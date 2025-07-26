import { ErrorMessage, Field, Form, Formik } from "formik";
import LayoutDefault from "../../layouts/LayoutDefault";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../../config/Api";
import Message from "../../config/Message";
import * as Yup from 'yup'
export default function AutoresForm() {

    const { setLoading } = useContext(AuthContext)
    const navigate = useNavigate();
    const params = useParams()
    const [data, setData] = useState({
        nome: '',
        nacionalidade: ''
    })

    async function save(values) {
        try {
            setLoading(true)
            if(params.id) {
                await Api.put(`autores/${params.id}`, values);
                Message.success("Autor(a) Atualizado(a) com Sucesso!")
            } else {
                await Api.post('autores', values);
                Message.success("Autor(a) Criado(a) com Sucesso!")
            }
            navigate('/autores');
        } catch(e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    const validacao = Yup.object().shape({
        nome: Yup.string().required("Campo Obrigatório").min(4, 'Deve conter no mínimo 4 caracteres'),
        nacionalidade: Yup.string().required('Campo Obrigatório')
    })

    return (
        <LayoutDefault>
            <h3>Formulário de Autores</h3> 
            <hr />
            <Formik
                enableReinitialize
                initialValues={data}
                validationSchema={validacao}
                onSubmit={(values) => {
                    save(values)
                }}
            >
                {({ handleSubmit }) => (
                    <Form>
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <Field 
                                name="nome"
                                id="nome"
                                className="form-control"
                            />
                            <span className="error"><ErrorMessage name="nome" /></span>
                        </div>
                        <div className="mt-3">
                            <label htmlFor="nacionalidade">Nacionalidade</label>
                            <Field 
                                name="nacionalidade"
                                id="nacionalidade"
                                className="form-control"
                            />
                            <span className="error">
                                <ErrorMessage name="nacionalidade" />
                            </span>
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-success btn-sm">Salvar</button>
                        </div>
                    </Form>
                )}
            </Formik>
            
        </LayoutDefault>
    )
}