const size = {
  auto: 'w-full',
  large: 'w-96',
  small: 'w-40',
};

const direction = {
  column: 'flex-col',
  row: '',
};

export function VideoItem({ video, option }) {
  const formatTitle = function (text) {
    if (text.length <= 60) return text;

    return `${text.slice(0, 60)}...`;
  };

  const handleClick = function () {
    console.log(video);
  };

  return (
    <div
      className={`flex ${
        direction[option?.direction]
      } items-start gap-4 cursor-pointer`}
      onClick={handleClick}
    >
      <img
        className={size[option.size]}
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div>
        <h2
          className={`text-white ${
            option.size === 'large' ? 'text-lg' : 'text-sm'
          }`}
        >
          {option.size !== 'large'
            ? formatTitle(video.snippet.title)
            : video.snippet.title}
        </h2>
        <span
          className={`text-gray-100 text-xs ${
            option.size === 'large' && 'mt-4 inline-block'
          }`}
        >
          {video.snippet.channelTitle}
        </span>
        {option.size === 'large' && (
          <p className="text-gray-100 text-xs mt-4">
            {video.snippet.description}
          </p>
        )}
      </div>
    </div>
  );
}
