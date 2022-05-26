import { useState, useEffect } from 'react';
// import { youtube } from '../api/youtube';
import { youtube } from '../api/mock-api';

export function useVideos(defaultSearchTerm) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    defaultSearchTerm && searchVideos(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const searchVideos = async function (term) {
    const { data } = await youtube.get('/search', { params: { q: term } });
    setVideos(data.items);
  };

  return [videos, searchVideos];
}
