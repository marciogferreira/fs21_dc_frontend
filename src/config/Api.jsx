import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://fs21-dc-backend-z615.onrender.com/'
})

Api.defaults.headers.token = localStorage.getItem('token');

export default Api;















// export const ApiPagSeguro = axios.create({
//     // baseURL: 'https://fakestoreapi.com/'
//     // baseURL: 'http://localhost:3000/',
//     baseURL: 'https://sandbox.api.pagseguro.com/',
//     headers: {
//         'Authorization': 'Bearer 908209830945893485840857t8507t8578t0'
//     }
// })


