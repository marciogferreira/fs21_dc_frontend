import axios from 'axios';
import Message from './Message'
const Api = axios.create({
    baseURL: 'https://fs21-dc-backend-z615.onrender.com/',
})


Api.interceptors.request.use((request) => {
    request.headers.token = localStorage.getItem('sis@biblioteca')
    return request;
}, () => {
    return Promise.reject(error)
});

Api.interceptors.response.use((response) => {
    // Response
    return response; 
}, (error) => {
    // Error
    console.log(error)
    if(error.status === 400) {
        Message.errorCallBack(`
            Você não tem autorização para acessar essa página. 
            Por favor, faça login novamente!
        `, () => {
            localStorage.removeItem('sis@biblioteca');
            window.location.href = '/'
        })
    } else {
        if(error.response.data.message) {
            Message.error(error.response.data.message)
        } else {
            Message.error(error.response.data)
        }
      
    }
    return Promise.reject(error)
});

export default Api;















// export const ApiPagSeguro = axios.create({
//     // baseURL: 'https://fakestoreapi.com/'
//     // baseURL: 'http://localhost:3000/',
//     baseURL: 'https://sandbox.api.pagseguro.com/',
//     headers: {
//         'Authorization': 'Bearer 908209830945893485840857t8507t8578t0'
//     }
// })


