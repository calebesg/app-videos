import React from 'react';
import { connect } from 'react-redux';
import VideoList from '../components/VideoList';
import { fetchVideosByTerm } from '../actions';
import { ResultNotFound } from '../components/ResultNotFound';

class SearchPage extends React.Component {
  state = { query: '' };

  componentDidMount() {
    const term = window.location.search.split('=')[1];

    if (term) {
      this.props.fetchVideosByTerm(term);
      this.setState({ query: term });
    }
  }

  render() {
    return (
      <main>
        {this.state.query ? (
          <VideoList display="column" items={{ style: 'rowLarge' }} />
        ) : (
          <ResultNotFound />
        )}
      </main>
    );
  }
}

export default connect(null, { fetchVideosByTerm })(SearchPage);
