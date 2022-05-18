import React from "react";

export class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(e) {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input
              type="text"
              id="search"
              value={this.state.term}
              onChange={this.onInputChange.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}
