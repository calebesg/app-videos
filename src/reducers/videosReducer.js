import {
  CLEAR_VIDEOS,
  FETCH_VIDEO,
  FETCH_VIDEOS,
  SELECT_VIDEO,
} from '../actions/types';

const INITIAL_STATE = {
  targetId: null,
  selectedVideo: null,
  videos: [],
};

const videosReducers = function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return { ...state, videos: action.payload };
    case FETCH_VIDEO:
      return { ...state, selectedVideo: action.payload };
    case SELECT_VIDEO:
      return { ...state, targetId: action.payload };
    case CLEAR_VIDEOS:
      return { ...state, videos: [] };
    default:
      return state;
  }
};

export default videosReducers;
