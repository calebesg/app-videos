export function VideoItem({ video, onVideoSelected }) {
  return (
    <div
      style={{
        borderBottom: "1px solid #303030",
        marginBottom: "4px",
        padding: "16px 0",
      }}
      onClick={() => onVideoSelected(video)}
      className="video-item item"
    >
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
