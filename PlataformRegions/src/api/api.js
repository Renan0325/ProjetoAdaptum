import axios from 'axios';

//Comunicação com o back - end e o banco de dados.
const api = axios.create({
  baseURL: 'https://localhost:7278/api', 
});

export default api;
