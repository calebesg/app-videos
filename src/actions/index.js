import fetchRelatedVideos from './fetchRelatedVideos';
import fetchVideoById from './fetchVideoById';
import fetchMostPopularVideos from './fetchMostPopularVideos';
import fetchVideosByTerm from './fetchVideosByTerm';

export {
  fetchRelatedVideos,
  fetchVideoById,
  fetchMostPopularVideos,
  fetchVideosByTerm,
};

export const fetchTargetAndRelatedVideos = id => async dispatch => {
  await dispatch(fetchVideoById(id));
  dispatch(fetchRelatedVideos(id));
};
