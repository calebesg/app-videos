import React from 'react';
import { connect } from 'react-redux';
import VideoList from '../components/VideoList';
import { fetchMostPopularVideos } from '../actions';
import Container from '../components/Container';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchMostPopularVideos();
  }

  render() {
    return (
      <Container>
        <VideoList display="grid" items={{ style: 'default' }} />
      </Container>
    );
  }
}

export default connect(null, { fetchMostPopularVideos })(Home);
