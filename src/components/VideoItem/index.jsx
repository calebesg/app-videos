import { useNavigate } from 'react-router-dom';
import { characterLimit } from '../../utils/characterLimit';

import { styles } from './styles';

export function VideoItem({ video, style }) {
  const navigation = useNavigate();

  const selectedStyle = styles[style];

  let title = video.snippet.title;

  if (style === 'rowSmall') {
    title = characterLimit(title);
  }

  const handleClick = function () {
    navigation(`/watch?id=${video.id.videoId}`);
  };

  return (
    <li className={selectedStyle.card} onClick={handleClick}>
      <img
        className={selectedStyle.thumbnail}
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div>
        <h2 className={`text-white ${selectedStyle.titleSize}`}>{title}</h2>
        <span className={`text-gray-100 text-xs`}>
          {video.snippet.channelTitle}
        </span>

        {selectedStyle.type === 'extend' && (
          <p className="text-gray-100 text-xs mt-4 hidden lg:flex">
            {video.snippet.description}
          </p>
        )}
      </div>
    </li>
  );
}
