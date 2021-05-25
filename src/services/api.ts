import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3007/v5',
  headers: {
    Authorization: '0pcYuUDBppAtUXIvPMsbs0M2E1cwoP1XOrzNffWn',
    'Content-Type': 'application/json',
  },
});

export default api;
