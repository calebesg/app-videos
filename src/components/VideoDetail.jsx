import { connect } from 'react-redux';
import formatDate from '../utils/formatDate';

const VideoDetail = function ({ video }) {
  if (!video?.id) return null;

  const url = `https://www.youtube.com/embed/${video.id}`;

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

      <div className="mt-3 pb-2 px-4 sm:px-0">
        <h4 className="text-white font-bold text-sm md:text-xl">
          {video.snippet.title}
        </h4>
        <p className="font-bold text-xs text-gray-100 md:text-white md:text-sm mt-2 w-3/4">
          {`${formatDate(video.snippet.publishedAt)} `}
          <span className="text-gray-100 font-normal hidden md:inline">
            {video.snippet.description}
          </span>
        </p>
      </div>
    </>
  );
};

const mapStateToProps = function (state) {
  return {
    video: state.targetVideo,
  };
};

export default connect(mapStateToProps)(VideoDetail);
