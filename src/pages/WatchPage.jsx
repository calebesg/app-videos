import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';

import { NavBar } from '../components/NavBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import { fetchTargetAndRelatedVideos } from '../actions';

const WatchPage = function ({ fetchTargetAndRelatedVideos }) {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get('v');

  const getVideo = useCallback(() => {
    fetchTargetAndRelatedVideos(id);
  }, [fetchTargetAndRelatedVideos, id]);

  useEffect(() => {
    id ? getVideo() : navigate('/');
  }, [getVideo, navigate, id]);

  return (
    <>
      <NavBar />

      <main className="pt-14 sm:pt-20 px-0 sm:px-6 grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <VideoDetail />
        </div>

        <div className="px-4 sm:px-0">
          <VideoList display="column" items={{ style: 'rowSmall' }} />
        </div>
      </main>
    </>
  );
};

export default connect(null, { fetchTargetAndRelatedVideos })(WatchPage);
