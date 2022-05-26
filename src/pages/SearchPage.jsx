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
    // searchVideos(query);
    query && console.log(query);
  }, [query]);

  return (
    <>
      <NavBar />

      <main className="pt-16">
        <VideoList size="small" videos={videos} />
      </main>
    </>
  );
}
