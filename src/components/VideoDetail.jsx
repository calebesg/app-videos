export function VideoDetail({ video }) {
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={url}
          frameborder="0"
          title="youtube video player"
          allowFullScreen
          width="100%"
        ></iframe>
      </div>

      <div className="c-video__description">
        <h4 className="title">{video.snippet.title}</h4>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  );
}
