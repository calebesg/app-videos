export function VideoItem({ video, onVideoSelected }) {
  return (
    <div onClick={() => onVideoSelected(video)} className="c-videos__item">
      <img
        className="c-videos__image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="c-videos__content">
        <h2 className="c-videos__title">{video.snippet.title}</h2>
        <span className="c-videos__description">
          {video.snippet.channelTitle}
        </span>
      </div>
    </div>
  );
}
