import React from 'react';
import { connect } from 'react-redux';
import VideoList from '../components/VideoList';
import { fetchVideosByTerm } from '../actions';
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

    return <main>{this.renderListOrNot()}</main>;
  }
}

export default connect(null, { fetchVideosByTerm })(SearchPage);
