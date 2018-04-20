import React from "react";
import "./SearchResults.css";


const SearchResults = (props) => (
  <div id="results">
    {props.results.map(image => (<img id="results-image" src={image} />)) }
  </div>
                              
  
);
 

export default SearchResults;
