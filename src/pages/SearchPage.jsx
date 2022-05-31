import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import VideoList from '../components/VideoList';
import { fetchVideosByTerm } from '../actions';

const SearchPage = function ({ fetchVideosByTerm }) {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');

  useEffect(() => {
    query && fetchVideosByTerm(query);
  }, [query]);

  return (
    <>
      <NavBar />

      <main>
        <VideoList display="column" items={{ style: 'rowLarge' }} />
      </main>
    </>
  );
};

export default connect(null, { fetchVideosByTerm })(SearchPage);
