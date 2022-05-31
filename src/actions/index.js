import { youtube } from '../api/mock-api';

export const fetchMostPopularVideos = () => async dispatch => {
  const response = await youtube.get('/videos', {
    params: { chart: 'mostPopular' },
  });
  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data,
  });
};

export const fetchVideosByTerm = term => async dispatch => {
  const response = await youtube.get('/search', {
    params: { q: term },
  });
  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data,
  });
};

export const fetchRelatedVideos = id => async dispatch => {
  const response = await youtube.get('/search', {
    params: { relatedToVideoId: id },
  });
  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data,
  });
};
