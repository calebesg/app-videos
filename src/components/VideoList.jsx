import { VideoItem } from './VideoItem';

export function VideoList({ videos }) {
  return (
    <ul className="flex flex-col gap-4">
      {videos.map(video => (
        <li key={video.id.videoId}>
          <VideoItem video={video} />
        </li>
      ))}
    </ul>
  );
}
