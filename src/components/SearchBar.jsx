import React from "react";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };

    this.searchRef = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
    this.setState({ term: "" });

    console.log(this.searchRef.current);

    this.searchRef.current.blur();
  }

  render() {
    return (
      <nav style={{ backgroundColor: "#202020" }}>
        <div className="nav-wrapper">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="input-field">
              <input
                ref={this.searchRef}
                value={this.state.term}
                onChange={(e) => this.setState({ term: e.target.value })}
                id="search"
                type="search"
                required
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}
