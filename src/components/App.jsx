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

      <main>
        {selectedVideo && <VideoDetail video={selectedVideo} />}

        <VideoList onVideoSelected={setSelectedVideo} videos={videos} />
      </main>
    </>
  );
}
