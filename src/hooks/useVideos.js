import { useState } from 'react';
// import { youtube } from '../api/youtube';
import { youtube } from '../api/mock-api';

export const useVideos = function () {
  const [videos, setVideos] = useState([]);

  const searchVideos = async function (term) {
    const { data } = await youtube.get('/search', { params: { q: term } });
    setVideos(data.items);
  };

  // Busca videos relacionados => Usado na watch page
  const searchVideosById = async function (id) {
    const { data } = await youtube.get('/search', {
      params: { relatedToVideoId: id },
    });
    setVideos(data.items);
  };

  // Videos mais populares => Usado na home page
  const searchMostPopularVideos = async function () {
    const { data } = await youtube.get('/videos', {
      params: { chart: 'mostPopular' },
    });
    setVideos(data.items);
  };

  return {
    videos,
    searchVideos,
    searchVideosById,
    searchMostPopularVideos,
  };
};
