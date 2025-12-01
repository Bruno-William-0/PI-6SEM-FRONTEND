import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.20:3000", // coloque sua API aqui
  timeout: 5000,
});

export default api;
