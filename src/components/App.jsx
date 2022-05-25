import { useEffect, useState } from 'react';

import { useVideos } from '../hooks/useVideos';

import { SearchBar } from './SearchBar';
import { VideoDetail } from './VideoDetail';
import { VideoList } from './VideoList';

export function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, searchVideos] = useVideos('games');

  useEffect(() => setSelectedVideo(null), [videos]);

  return (
    <>
      <header>
        <SearchBar onFormSubmit={searchVideos} />
      </header>

      <main className="pt-20 px-8 grid grid-cols-1 gap-6 max-w-screen-2xl w-full mx-auto sm:grid-cols-3">
        {selectedVideo && (
          <div className="col-span-2">
            <VideoDetail video={selectedVideo} />
          </div>
        )}

        <div className={selectedVideo ? '' : 'col-span-3'}>
          <VideoList onVideoSelected={setSelectedVideo} videos={videos} />
        </div>
      </main>
    </>
  );
}
