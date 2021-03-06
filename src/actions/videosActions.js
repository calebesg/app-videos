import {
  CLEAR_VIDEOS,
  FETCH_VIDEO,
  FETCH_VIDEOS,
  SELECT_VIDEO,
} from '../actions/types';
import { youtube } from '../apis/mock-api';

export const fetchTargetAndRelatedVideos = id => async dispatch => {
  dispatch(clearVideos());
  await dispatch(fetchVideoById(id));
  await dispatch(fetchRelatedVideos(id));
};

export const fetchVideosByTerm = term => async dispatch => {
  dispatch(clearVideos());

  const response = await youtube.get('/search', {
    params: { q: term },
  });

  dispatch({
    type: FETCH_VIDEOS,
    payload: response.data.items,
  });
};

export const fetchVideoById = id => async dispatch => {
  const response = await youtube.get('/videos', {
    params: { id: id },
  });
  dispatch({
    type: FETCH_VIDEO,
    payload: response.data.items[0],
  });
};

export const selectVideo = id => dispatch => {
  dispatch({
    type: SELECT_VIDEO,
    payload: id,
  });
};

export const fetchRelatedVideos = id => async dispatch => {
  dispatch(clearVideos());

  const response = await youtube.get('/search', {
    params: { relatedToVideoId: id, maxResults: 15 },
  });

  dispatch({
    type: FETCH_VIDEOS,
    payload: response.data.items,
  });
};

export const fetchMostPopularVideos = () => async dispatch => {
  dispatch(clearVideos());

  const response = await youtube.get('/videos', {
    params: { chart: 'mostPopular' },
  });
  dispatch({
    type: FETCH_VIDEOS,
    payload: response.data.items,
  });
};

export const clearVideos = () => dispatch => {
  dispatch({
    type: CLEAR_VIDEOS,
  });
};
