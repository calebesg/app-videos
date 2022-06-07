import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectVideo } from '../../actions';
import { characterLimit } from '../../utils/characterLimit';

import { styles } from './styles';

const VideoItem = function ({ video, style, selectVideo }) {
  const navigation = useNavigate();
  const selectedStyle = styles[style];

  const handleClick = function (id) {
    selectVideo(video.id.videoId);
    navigation(`/watch?v=${id}`);
  };

  return (
    <li
      className={selectedStyle.card}
      onClick={() =>
        handleClick(video.id?.videoId ? video.id.videoId : video.id)
      }
    >
      <img
        className={selectedStyle.thumbnail}
        src={video.snippet?.thumbnails.medium.url}
        alt={video.snippet?.title}
      />
      <div>
        <h2 className={`text-white ${selectedStyle.titleSize}`}>
          {characterLimit(video.snippet?.title)}
        </h2>
        <span className={`text-gray-100 text-xs`}>
          {video.snippet?.channelTitle}
        </span>

        {selectedStyle.type === 'extend' && (
          <p className="text-gray-100 text-xs mt-4 hidden lg:flex">
            {video.snippet?.description}
          </p>
        )}
      </div>
    </li>
  );
};

export default connect(null, { selectVideo })(VideoItem);
