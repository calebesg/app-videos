import axios from 'axios';
import { API_KEY } from './config';

export const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: API_KEY,
  },
});
