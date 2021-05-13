import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3007/v5',
  headers: {
    Authorization: 'tMg/1vY/tJHcNC4krK3Sd16zN5BrMDV+KFicmGUz',
    'Content-Type': 'application/json',
  },
});

export default api;
