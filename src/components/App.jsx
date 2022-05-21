import React from "react";
import { youtube } from "../api/youtube";
import { SearchBar } from "./SearchBar";
import { VideoDetail } from "./VideoDetail";
import { VideoList } from "./VideoList";

export class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  async requestTerm(term) {
    const response = await youtube.get("/search", { params: { q: term } });
    this.setState({
      videos: response.data.items,
      selectedVideo: null,
    });
  }

  onVideoSelected(video) {
    this.setState({ selectedVideo: video });
    console.log(video);
  }

  render() {
    const { selectedVideo, videos } = this.state;

    return (
      <>
        <header>
          <SearchBar onFormSubmit={this.requestTerm.bind(this)} />
        </header>

        <main>
          {selectedVideo && <VideoDetail video={selectedVideo} />}

          <VideoList
            onVideoSelected={this.onVideoSelected.bind(this)}
            videos={videos}
          />
        </main>
      </>
    );
  }
}
