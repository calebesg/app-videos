import { VideoItem } from './VideoItem';

export function VideoList({ videos, onVideoSelected }) {
  return (
    <ul className="flex flex-col gap-4">
      {videos.map(video => (
        <li key={video.id.videoId}>
          <VideoItem onVideoSelected={onVideoSelected} video={video} />
        </li>
      ))}
    </ul>
  );
}
