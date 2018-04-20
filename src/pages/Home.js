import React from "react";
import Logo from "../components/Logo";
import Button from "../components/Button";

// Styles
const h1 = {
  fontSize: "78px",
  lineHeight: "1.2",
  marginTop: "80px",
  color: "#fff",
  fontFamily: "'Nunito', sans-serif",
  letterSpacing: "2px",
  fontWeight: 900,
  marginBottom: "140px"
}

const link = {
  textDecoration: "none"
}

const Home = () => (
  <div className="container text-center">
    <a href="/" style={link}>
      <Logo />
    </a>
   
    <h1 style={h1}>Love Is A Four-Legged Word, Find Your Dream Furry Friend !</h1>

    <div>
      <Button button="Search" directory="/search"/>
      <Button button="Discover" directory="/discover"/>
    </div>
  </div>
);

export default Home;
