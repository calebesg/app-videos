import { useVideos } from '../hooks/useVideos';

import { NavBar } from '../components/NavBar';
import { VideoDetail } from '../components/VideoDetail';
import { VideoList } from '../components/VideoList';

export function WatchPage() {
  const [videos] = useVideos('teste');

  return (
    <>
      <NavBar />

      <main className="pt-14 sm:pt-20 px-0 sm:px-6 grid gap-6 grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {videos.length > 0 && <VideoDetail video={videos[0]} />}
        </div>

        <div className="px-4 sm:px-0">
          <VideoList
            display="column"
            items={{
              videos,
              style: 'rowSmall',
            }}
          />
        </div>
      </main>
    </>
  );
}
