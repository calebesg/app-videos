import { VideoItem } from './VideoItem';

export function VideoList({ videos, options }) {
  return (
    <ul
      className={
        options?.display === 'grid'
          ? 'grid gap-x-4 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
          : 'flex flex-col gap-4'
      }
    >
      {videos.map(video => (
        <li key={video.id.videoId}>
          <VideoItem option={options?.styleItems} video={video} />
        </li>
      ))}
    </ul>
  );
}
