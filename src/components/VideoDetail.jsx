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

      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}
