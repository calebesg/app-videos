import { useNavigate } from 'react-router-dom';
import { characterLimit } from '../../utils/characterLimit';

import { styles } from './styles';

export function VideoItem({ video, style }) {
  const navigation = useNavigate();

  const selectedStyle = style ? styles[style] : style.default;

  let title = video.snippet.title;

  if (
    selectedStyle.titleSize !== styles.rowLarge.titleSize ||
    window.screen.availWidth <= 768
  ) {
    title = characterLimit(title, 40);
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
          <p className="text-gray-100 text-xs mt-4 opacity-0 h-0 overflow-hidden md:opacity-100 md:overflow-visible">
            {video.snippet.description}
          </p>
        )}
      </div>
    </li>
  );
}
