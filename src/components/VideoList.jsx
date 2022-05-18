import { VideoItem } from "./VideoItem";

export function VideoList({ videos }) {
  const renderItems = videos.map((item) => (
    <VideoItem key={item.id.videoId} video={item} />
  ));

  return <div className="ui relaxed divided list">{renderItems}</div>;
}
