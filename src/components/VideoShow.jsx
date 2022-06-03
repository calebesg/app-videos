import { connect } from 'react-redux';
import formatDate from '../utils/formatDate';
import VideoDescription from './VideoDescription';

const VideoShow = function ({ video }) {
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
        <div className="flex gap-1">
          {video.snippet?.tags[1].split(' ').map((tag, index) => (
            <span key={index} className="text-blue-400 text-xs">
              #{`${tag[0].toUpperCase()}${tag.slice(1)}`}
            </span>
          ))}
        </div>

        <h4 className="text-white font-bold text-sm md:text-xl">
          {video.snippet.title}
        </h4>

        <div className="font-bold text-xs text-gray-100 md:text-white md:text-sm mt-2 w-3/4 relative">
          {`${formatDate(video.snippet.publishedAt)} `}

          <VideoDescription description={video.snippet.description} />
        </div>
      </div>
    </>
  );
};

const mapStateToProps = function (state) {
  return {
    video: state.targetVideo,
  };
};

export default connect(mapStateToProps)(VideoShow);
