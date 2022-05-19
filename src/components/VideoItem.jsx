export function VideoItem({ video, onVideoSelected }) {
  return (
    <div onClick={() => onVideoSelected(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <h2 className="header">{video.snippet.title}</h2>
        <span className="description">{video.snippet.channelTitle}</span>
      </div>
    </div>
  );
}
