import { NavBar } from '../components/NavBar';
import { VideoList } from '../components/VideoList';
import { useVideos } from '../hooks/useVideos';

export function Home() {
  const [videos] = useVideos('games');

  return (
    <>
      <NavBar />

      <main className="pt-16">
        <VideoList grid={true} size="large" videos={videos} />
      </main>
    </>
  );
}
