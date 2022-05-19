import React from "react";
import { youtube } from "../api/youtube";
import { SearchBar } from "./SearchBar";
import { VideoList } from "./VideoList";

export class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  async requestTerm(term) {
    const response = await youtube.get("/search", { params: { q: term } });
    this.setState({ videos: response.data.items });
  }

  onVideoSelected(video) {
    this.setState({ selectedVideo: video });
    console.log(video);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.requestTerm.bind(this)} />

        <VideoList
          onVideoSelected={this.onVideoSelected.bind(this)}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
