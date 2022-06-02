const videosReducers = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_VIDEOS':
      return action.payload;
    default:
      return state;
  }
};

export default videosReducers;
