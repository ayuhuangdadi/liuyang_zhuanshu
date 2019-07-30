import axios from 'axios'

const server = axios.create({
    baseURL: 'http://127.0.0.1:7001',
    timeout: 5000,
  });


server.interceptors.request.use(function (config) {
    return config;
});

server.interceptors.response.use(function (response) {
    return response;
})


export default server