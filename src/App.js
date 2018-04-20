import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

// Pages
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Search from "./pages/Search";


const App = () =>
<Router>
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/discover" component={Discover} />
    <Route exact path="/search" component={Search} />
  </div>
</Router>

export default App;
