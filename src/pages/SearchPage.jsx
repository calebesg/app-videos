import React from 'react';
import { connect } from 'react-redux';
import { fetchVideosByTerm } from '../actions';

import Container from '../components/Container';
import VideoList from '../components/VideoList';
import { ResultNotFound } from '../components/ResultNotFound';

class SearchPage extends React.Component {
  state = { result: null };

  componentDidMount() {
    const search = window.location.search;
    const term = new URLSearchParams(search).get('search');

    if (!term) return this.setState({ result: false });

    this.setState({ result: true });
    this.props.fetchVideosByTerm(term);
  }

  renderListOrNot() {
    return this.state.result ? (
      <VideoList display="column" items={{ style: 'rowLarge' }} />
    ) : (
      <ResultNotFound />
    );
  }

  render() {
    if (this.state.result === null) return null;

    return <Container>{this.renderListOrNot()}</Container>;
  }
}

export default connect(null, { fetchVideosByTerm })(SearchPage);
