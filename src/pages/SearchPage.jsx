import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { NavBar } from '../components/NavBar';
import { VideoList } from '../components/VideoList';
import { useVideos } from '../hooks/useVideos';

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const [videos, searchVideos] = useVideos();

  const query = searchParams.get('search');

  useEffect(() => {
    query && searchVideos(query);
  }, [query, searchVideos]);

  return (
    <>
      <NavBar />

      <main>
        <VideoList
          display="column"
          items={{
            videos,
            style: 'rowLarge',
          }}
        />
      </main>
    </>
  );
}
