import { useVideos } from '../hooks/useVideos';

import { NavBar } from '../components/NavBar';
import { VideoDetail } from '../components/VideoDetail';
import { VideoList } from '../components/VideoList';

export function WatchPage() {
  const [videos] = useVideos('teste');

  return (
    <>
      <NavBar />

      <main className="grid lg:grid-cols-3 gap-6 grid-cols-1">
        <div className="col-span-2">
          {videos.length > 0 && <VideoDetail video={videos[0]} />}
        </div>

        <VideoList
          options={{
            display: 'inline',
            styleItems: {
              size: 'small',
              direction: 'row',
            },
          }}
          videos={videos}
        />
      </main>
    </>
  );
}
