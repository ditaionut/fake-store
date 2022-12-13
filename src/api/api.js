import axios from 'axios'

export const prodInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});
