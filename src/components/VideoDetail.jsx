export function VideoDetail({ video }) {
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="c-player">
      <div className="c-player__video">
        <iframe
          src={url}
          frameborder="0"
          title="youtube video player"
          allowFullScreen
        ></iframe>
      </div>

      <div className="c-player__description">
        <h4 className="title">{video.snippet.title}</h4>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
}
