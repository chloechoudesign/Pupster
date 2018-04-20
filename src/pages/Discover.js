import React from "react";
import API from "../utils/API";
import Logo from "../components/Logo";
import Card from "../components/Card";
import Alert from "../components/Alert";


// Styles
const link = {
  textDecoration: "none"
}

const h1 = {
  fontSize: "30px",
  lineHeight: "1.2",
  marginTop: "50px",
  color: "#fff",
  fontFamily: "'Nunito', sans-serif",
  letterSpacing: "2px",
  fontWeight: 700,
}



class Discover extends React.Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  }

  componentDidMount() {
    this.loadNextDog();
    console.log(this.state.image);
  };

  loadNextDog = () => {
    API.getRandomDog()
      .then(res => this.setState({ image: res.data.message }))
      .catch(err => console.log(err));
  };

  handleBtnClick = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;

    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);
    this.loadNextDog();
  };

  render() {
    return (
      <div className="container text-center">
        <a href="/" className="text-center" style={link}>
          <Logo />
        </a>

        <h1 style={h1}>Thumbs up on any pups you'd like to meet!</h1>

        <Card 
          image={this.state.image}
          handleBtnClick={this.handleBtnClick} 
        />

        <h1 style={h1}>Made friends with {this.state.matchCount} pups so far!</h1>

        <Alert style={{ opacity: this.state.match ? 1 : 0 }} type="success">
          Yay! That Pup Liked You Too!!!
        </Alert>

      </div>    
    )
  }
}



export default Discover;
