export function VideoItem({ video, onVideoSelected }) {
  const formatTitle = function (text) {
    if (text.length <= 60) return text;

    return `${text.slice(0, 60)}...`;
  };

  return (
    <div
      className="flex items-start gap-2 cursor-pointer hover:opacity-70 transition-all"
      onClick={() => onVideoSelected(video)}
    >
      <img
        className="w-40"
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
