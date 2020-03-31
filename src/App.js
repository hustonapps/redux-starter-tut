import React from 'react';
import { Router, Link } from '@reach/router';
import HomeHooks from './pages/Home/HomeStateless';
import HomeComponent from './pages/Home/HomeClass';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home (stateless)</Link>
        <Link to="/withoutHooks">Home (component)</Link>
      </nav>
      <Router>
        <HomeHooks path="/" />
        <HomeComponent path="/withoutHooks" />
      </Router>
    </div>
  );
}

export default App;
