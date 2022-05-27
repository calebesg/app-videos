const size = {
  auto: 'w-full',
  large: 'w-48',
  small: 'w-40',
};

const direction = {
  column: 'flex-col',
  inline: '',
};

export function VideoItem({ video, onVideoSelected, option }) {
  const formatTitle = function (text) {
    if (text.length <= 60) return text;

    return `${text.slice(0, 60)}...`;
  };

  return (
    <div
      className={`flex ${
        direction[option?.direction]
      } items-start gap-4 cursor-pointer`}
      onClick={() => onVideoSelected(video)}
    >
      <img
        className={size[option.size]}
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div>
        <h2 className="text-white text-sm">
          {formatTitle(video.snippet.title)}
        </h2>
        <span className="text-gray-100 text-xs">
          {video.snippet.channelTitle}
        </span>
      </div>
    </div>
  );
}
