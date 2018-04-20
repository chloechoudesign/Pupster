import React from "react";
import "./SearchForm.css";


const SearchForm = (props) => (
  <form className="search">
    <div className="form-group">
      <input
        list="breeds"
        type="text"
        id="breed"
        placeholder="Type in a dog breed to begin"
        onChange={props.handleInput}
        value={props.value}
      />
      <datalist id="breeds">
        {props.breeds.map(breed => <option value={breed} key={breed} />)}
      </datalist>
      <input
        name="Search"
        id="submit-btn"
        type="submit"
        onClick={props.handleSubmit}
      />
    </div>
  </form>
);
 

export default SearchForm;
