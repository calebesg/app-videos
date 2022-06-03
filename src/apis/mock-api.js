import axios from 'axios';

export const youtube = axios.create({
  baseURL: 'http://localhost:3333',
});
