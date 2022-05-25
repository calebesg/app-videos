import { useState, useEffect } from 'react';

import { useVideos } from '../hooks/useVideos';
import { SearchBar } from './SearchBar';

export function Header() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, searchVideos] = useVideos('games');

  useEffect(() => setSelectedVideo(null), [videos]);

  return (
    <header>
      <SearchBar onFormSubmit={searchVideos} />
    </header>
  );
}
