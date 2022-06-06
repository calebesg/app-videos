import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import VideoList from '../components/VideoList';
import VideoShow from '../components/VideoShow';
import { selectVideo } from '../actions';

class WatchPage extends React.Component {
  state = { redirect: null };

  componentDidMount() {
    const search = window.location.search;
    const id = new URLSearchParams(search).get('v');

    if (!id) return this.setState({ redirect: true });

    this.props.selectVideo(id);
  }

  render() {
    if (this.state.redirect) return <Navigate to="/" replace={true} />;

    return (
      <main className="pt-14 sm:pt-20 px-0 sm:px-6 grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <VideoShow />
        </div>

        <div className="px-4 sm:px-0">
          <VideoList display="column" items={{ style: 'rowSmall' }} />
        </div>
      </main>
    );
  }
}

export default connect(null, { selectVideo })(WatchPage);
