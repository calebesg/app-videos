const targetVideo = function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_VIDEO':
      return action.payload;
    default:
      return state;
  }
};

export default targetVideo;
