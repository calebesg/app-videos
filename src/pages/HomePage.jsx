import { useEffect } from 'react';
import { NavBar } from '../components/NavBar';
import { VideoList } from '../components/VideoList';
import { useVideos } from '../hooks/useVideos';

export function Home() {
  const { videos, searchMostPopularVideos } = useVideos();

  videos.length === 0 && searchMostPopularVideos();
  // useEffect(searchMostPopularVideos, []);

  return (
    <>
      <NavBar />

      <main>
        <VideoList
          display="grid"
          items={{
            videos,
            style: 'default',
          }}
        />
      </main>
    </>
  );
}
