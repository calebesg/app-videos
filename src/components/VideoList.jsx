import { connect } from 'react-redux';
import VideoItem from './VideoItem';

const styles = {
  grid: 'grid gap-x-4 gap-y-4 sm:gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  column:
    'grid gap-x-4  gap-y-4 sm:gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-col lg:gap-4',
};

const VideoList = function ({ display, items, videos }) {
  const selectedStyle = display ? styles[display] : styles.column;

  return (
    <ul className={selectedStyle}>
      {videos.map(video => (
        <VideoItem key={video.id.videoId} style={items.style} video={video} />
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos.videos,
  };
};

export default connect(mapStateToProps)(VideoList);
