export function VideoDetail({ video }) {
  const url = `https://www.youtube.com/embed/${video.id.videoId}`;

  const formatDate = function (str) {
    const date = new Date(str);
    return str;
  };

  return (
    <>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={url}
          frameBorder="0"
          title="youtube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="mt-3 pb-2">
        <h4 className="text-white font-bold text-xl">{video.snippet.title}</h4>
        <p className="text-white font-bold text-sm mt-2 w-3/4">
          {formatDate(video.snippet.publishedAt)}
          <span className="text-gray-100 font-normal">
            {video.snippet.description}
          </span>
        </p>
      </div>
    </>
  );
}
