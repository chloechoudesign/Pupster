import React from "react";
import Logo from "../components/Logo";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

// Styles
const link = {
  textDecoration: "none"
}

class Search extends React.Component {
  state = {
    search: "",
    results: [],
    breeds: []
  };

  componentDidMount() {
    API.getList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  };

  handleInput = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    
    API.search(this.state.search)
      .then(res => this.setState({ results: res.data.message }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="container text-center">
        <a href="/" className="text-center" style={link}>
          <Logo />
        </a>
        <SearchForm 
          value={this.state.search}
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          breeds={this.state.breeds}
        />
        <SearchResults
          results={this.state.results}
        />
      </div>
    )
  }
}




export default Search;
