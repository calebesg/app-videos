import _ from 'lodash';
import { youtube } from '../api/mock-api';

export default () => async dispatch => {
  const response = await youtube.get('/videos', {
    params: { chart: 'mostPopular' },
  });
  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data.items,
  });
};
