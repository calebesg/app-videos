import { youtube } from '../api/mock-api';

const fetchMostPopularVideos = () => async dispatch => {
  const response = await youtube.get('/videos', {
    params: { chart: 'mostPopular' },
  });
  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data.items,
  });
};

export default fetchMostPopularVideos;
