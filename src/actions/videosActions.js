import _ from 'lodash';
import { youtube } from '../api/mock-api';

export const fetchTargetAndRelatedVideos = id => async dispatch => {
  await dispatch(fetchVideoById(id));
  dispatch(fetchRelatedVideos(id));
};

export const fetchVideosByTerm = term => async dispatch => {
  _fetchVideosByTerm(term, dispatch);
};

const _fetchVideosByTerm = _.memoize(async (term, dispatch) => {
  const response = await youtube.get('/search', {
    params: { q: term },
  });
  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data.items,
  });
});

export const fetchVideoById = id => dispatch => {
  _fetchVideoById(id, dispatch);
};

const _fetchVideoById = _.memoize(async (id, dispatch) => {
  const response = await youtube.get('/videos', {
    params: { id },
  });
  dispatch({
    type: 'FETCH_VIDEO',
    payload: response.data.items[0],
  });
});

export const fetchRelatedVideos = id => dispatch => {
  _fetchRelatedVideos(id, dispatch);
};

const _fetchRelatedVideos = _.memoize(async (id, dispatch) => {
  const response = await youtube.get('/search', {
    params: { relatedToVideoId: id, maxResults: 20 },
  });
  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data.items,
  });
});

export const fetchMostPopularVideos = () => async dispatch => {
  const response = await youtube.get('/videos', {
    params: { chart: 'mostPopular' },
  });
  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data.items,
  });
};
