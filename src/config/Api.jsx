import axios from 'axios';

const Api = axios.create({
    // baseURL: 'https://fakestoreapi.com/'
    baseURL: 'http://localhost:3000/'
})

export const ApiPagSeguro = axios.create({
    // baseURL: 'https://fakestoreapi.com/'
    // baseURL: 'http://localhost:3000/',
    baseURL: 'https://sandbox.api.pagseguro.com/',
    headers: {
        'Authorization': 'Bearer 908209830945893485840857t8507t8578t0'
    }
})



export default Api;


