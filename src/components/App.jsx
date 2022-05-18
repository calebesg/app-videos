import React from "react";
import { youtube } from "../api/youtube";
import { SearchBar } from "./SearchBar";

export class App extends React.Component {
  state = { videos: [] };

  async requestTerm(term) {
    const response = await youtube.get("/search", { params: { q: term } });
    this.setState({ videos: response.data.items });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.requestTerm.bind(this)} />
      </div>
    );
  }
}
