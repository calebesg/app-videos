import React from 'react';
import { connect } from 'react-redux';
import { fetchTargetAndRelatedVideos } from '../actions';
import formatDate from '../utils/formatDate';
import VideoDescription from './VideoDescription';

class VideoShow extends React.Component {
  componentDidMount() {
    this.props.fetchTargetAndRelatedVideos(this.props.targetId);
  }

  render() {
    const { selectedVideo } = this.props;

    if (selectedVideo === null) return <h1>LOADING</h1>;

    console.log(selectedVideo);

    return (
      <>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
            frameBorder="0"
            title="youtube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-3 pb-2 px-4 sm:px-0">
          {/* <div className="flex gap-1">
            {selectedVideo.snippet?.tags[1].split(' ').map((tag, index) => (
              <span key={index} className="text-blue-400 text-xs">
                #{`${tag[0].toUpperCase()}${tag.slice(1)}`}
              </span>
            ))}
          </div> */}

          <h4 className="text-white font-bold text-sm md:text-xl">
            {selectedVideo.snippet.title}
          </h4>

          <div className="font-bold text-xs text-gray-100 md:text-white md:text-sm mt-2 w-3/4 relative">
            {`${formatDate(selectedVideo.snippet.publishedAt)} `}

            <VideoDescription description={selectedVideo.snippet.description} />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    targetId: state.videos.targetId,
    selectedVideo: state.videos.selectedVideo,
  };
};

export default connect(mapStateToProps, { fetchTargetAndRelatedVideos })(
  VideoShow
);
