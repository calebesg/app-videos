import { VideoItem } from './VideoItem';

const styles = {
  grid: 'grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  column: 'flex flex-col gap-4',
};

export function VideoList({ display, items }) {
  const selectedStyle = display ? styles[display] : styles.column;

  return (
    <ul className={selectedStyle}>
      {items.videos.map(video => (
        <VideoItem key={video.id.videoId} style={items.style} video={video} />
      ))}
    </ul>
  );
}
