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
    return (
      <div className="ui container fluid">
        <SearchBar onFormSubmit={this.requestTerm.bind(this)} />

        <div id="container" className="ui grid">
          <div className="ui row">
            {this.state.selectedVideo && (
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
            )}

            <div
              className={
                this.state.selectedVideo ? "five wide column" : "wide column"
              }
            >
              <VideoList
                onVideoSelected={this.onVideoSelected.bind(this)}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
