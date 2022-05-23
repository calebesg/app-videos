export function VideoDetail({ video }) {
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="c-player">
      <div className="aspect-w-16 aspect-h-9 w-full h-auto">
        <iframe
          className="aspect-w-16 aspect-h-9"
          src={url}
          frameBorder="0"
          title="youtube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
