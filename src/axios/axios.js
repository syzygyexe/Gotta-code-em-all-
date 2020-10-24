import Axios from "axios";

export const axios = Axios.create({
  baseURL: `https://pokeapi.co/api/v2/pokemon/`,
  timeout: 3000,
});
