import _ from 'lodash';
import { youtube } from '../api/mock-api';

export default id => dispatch => {
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