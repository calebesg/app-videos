import { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import VideoList from '../components/VideoList';
import { fetchMostPopularVideos } from '../actions';

const Home = function ({ fetchMostPopularVideos }) {
  const getVideos = useCallback(() => {
    fetchMostPopularVideos();
  }, [fetchMostPopularVideos]);

  useEffect(() => getVideos, [getVideos]);

  return (
    <main>
      <VideoList display="grid" items={{ style: 'default' }} />
    </main>
  );
};

export default connect(null, { fetchMostPopularVideos })(Home);
