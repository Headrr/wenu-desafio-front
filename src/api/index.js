import axios from "axios";

// Configuracion de la API con AXIOS

export default axios.create({
  baseURL: `https://rickandmortyapi.com/api/`,
});
