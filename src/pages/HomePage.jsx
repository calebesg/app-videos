import React from 'react';
import { connect } from 'react-redux';
import VideoList from '../components/VideoList';
import { fetchMostPopularVideos } from '../actions';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchMostPopularVideos();
  }

  render() {
    return (
      <main>
        <VideoList display="grid" items={{ style: 'default' }} />
      </main>
    );
  }
}

export default connect(null, { fetchMostPopularVideos })(Home);
