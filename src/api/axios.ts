import axios from 'axios';

const API_KEY = import.meta.env.VITE_API;

const instance = axios.create({
  baseURL: API_KEY,
});

export default instance;
