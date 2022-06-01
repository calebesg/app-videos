import { combineReducers } from 'redux';
import videosReducer from './videosReducer';
import targetVideo from './targetVideo';

export default combineReducers({
  videos: videosReducer,
  targetVideo: targetVideo,
});
