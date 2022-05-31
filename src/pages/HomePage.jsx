import { useEffect } from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../components/NavBar';
import VideoList from '../components/VideoList';
import { fetchMostPopularVideos } from '../actions';

const Home = function ({ fetchMostPopularVideos: getVideos }) {
  useEffect(() => getVideos, []);

  return (
    <>
      <NavBar />

      <main>
        <VideoList display="grid" items={{ style: 'default' }} />
      </main>
    </>
  );
};

export default connect(null, { fetchMostPopularVideos })(Home);
