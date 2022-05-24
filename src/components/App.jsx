import { useState } from 'react';

import { youtube } from '../api/youtube';
import { SearchBar } from './SearchBar';
import { VideoDetail } from './VideoDetail';
import { VideoList } from './VideoList';

export function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const searchVideos = async function (term) {
    const { data } = await youtube.get('/search', { params: { q: term } });

    setVideos(data.items);
    setSelectedVideo(null);
  };

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
