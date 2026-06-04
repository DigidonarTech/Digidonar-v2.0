import axios from 'axios';

// Use localhost for development, environment variable for production
const API_URL = import.meta.env.DEV 
    ? 'http://localhost:5050/api' 
    : (import.meta.env.VITE_API_URL || 'http://localhost:5000/api');

const api = axios.create({
    baseURL: API_URL,
});

export default api;
export { API_URL };
