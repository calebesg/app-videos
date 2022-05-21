import { VideoItem } from "./VideoItem";

export function VideoList({ videos, onVideoSelected }) {
  const renderItems = videos.map((item) => (
    <VideoItem
      onVideoSelected={onVideoSelected}
      key={item.id.videoId}
      video={item}
    />
  ));

  return <div className="c-videos">{renderItems}</div>;
}
