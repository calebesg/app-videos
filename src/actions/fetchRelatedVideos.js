import _ from 'lodash';
import { youtube } from '../api/mock-api';

const fetchRelatedVideos = id => dispatch => {
  _fetchRelatedVideos(id, dispatch);
};

const _fetchRelatedVideos = _.memoize(async (id, dispatch) => {
  const response = await youtube.get('/search', {
    params: { relatedToVideoId: id },
  });
  dispatch({
    type: 'FETCH_VIDEOS',
    payload: response.data.items,
  });
});

export default fetchRelatedVideos;
