import { youtube } from '../apis/mock-api';

export const fetchTargetAndRelatedVideos = id => async dispatch => {
  dispatch(clearVideos());
  await dispatch(fetchVideoById(id));
  dispatch(fetchRelatedVideos(id));
};

export const fetchVideosByTerm = term => async dispatch => {
  dispatch(clearVideos());

  const response = await youtube.get('/search', {
    params: { q: term },
  });

  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data.items,
  });
};

export const fetchVideoById = id => async dispatch => {
  const response = await youtube.get('/videos', {
    params: { id },
  });
  dispatch({
    type: 'FETCH_VIDEO',
    payload: response.data.items[0],
  });
};

export const fetchRelatedVideos = id => async dispatch => {
  dispatch(clearVideos());

  const response = await youtube.get('/search', {
    params: { relatedToVideoId: id, maxResults: 20 },
  });

  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data.items,
  });
};

export const fetchMostPopularVideos = () => async dispatch => {
  dispatch(clearVideos());

  const response = await youtube.get('/videos', {
    params: { chart: 'mostPopular' },
  });
  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data.items,
  });
};

export const clearVideos = () => dispatch => {
  dispatch({
    type: 'CLEAR_VIDEOS',
  });
};
