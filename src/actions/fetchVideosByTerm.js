import _ from 'lodash';
import { youtube } from '../api/mock-api';

export default term => async dispatch => {
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
