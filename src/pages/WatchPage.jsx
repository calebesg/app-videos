import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { NavBar } from '../components/NavBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import { fetchRelatedVideos } from '../actions';

const WatchPage = function ({ fetchRelatedVideos }) {
  const [params] = useSearchParams();
  const id = params.get('v');

  useEffect(() => {
    fetchRelatedVideos(id);
  }, [id]);

  return (
    <>
      <NavBar />

      <main className="pt-14 sm:pt-20 px-0 sm:px-6 grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <VideoDetail videoId={id} />
        </div>

        <div className="px-4 sm:px-0">
          <VideoList display="column" items={{ style: 'rowSmall' }} />
        </div>
      </main>
    </>
  );
};

export default connect(null, { fetchRelatedVideos })(WatchPage);
