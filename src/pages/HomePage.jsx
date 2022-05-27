import { NavBar } from '../components/NavBar';
import { VideoList } from '../components/VideoList';
import { useVideos } from '../hooks/useVideos';

export function Home() {
  const [videos] = useVideos('ultimos lançamentos de jogos');

  return (
    <>
      <NavBar />

      <main>
        <VideoList
          options={{
            display: 'grid',
            styleItems: {
              size: 'auto',
              direction: 'column',
            },
          }}
          videos={videos}
        />
      </main>
    </>
  );
}
