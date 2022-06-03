const videosReducers = function (state = [], action) {
  switch (action.type) {
    case 'FETCH_VIDEOS':
      return action.payload;
    case 'CLEAR_VIDEOS':
      return [];
    default:
      return state;
  }
};

export default videosReducers;
