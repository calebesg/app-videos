import { NavBar } from '../components/NavBar';
import { VideoList } from '../components/VideoList';
import { useVideos } from '../hooks/useVideos';

export function SearchPage() {
  const [videos] = useVideos('games');

  return (
    <>
      <NavBar />

      <main className="pt-16">
        <VideoList size="small" videos={videos} />
      </main>
    </>
  );
}
