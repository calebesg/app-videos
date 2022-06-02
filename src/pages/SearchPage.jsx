import { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import VideoList from '../components/VideoList';
import { fetchVideosByTerm } from '../actions';
import { ResultNotFound } from '../components/ResultNotFound';

const SearchPage = function ({ fetchVideosByTerm }) {
  const [params] = useSearchParams();
  const query = params.get('search');

  const getVideos = useCallback(() => {
    query && fetchVideosByTerm(query);
  }, [query, fetchVideosByTerm]);

  useEffect(() => getVideos, [getVideos]);

  return (
    <>
      <NavBar />

      <main>
        {query ? (
          <VideoList display="column" items={{ style: 'rowLarge' }} />
        ) : (
          <ResultNotFound />
        )}
      </main>
    </>
  );
};

export default connect(null, { fetchVideosByTerm })(SearchPage);
