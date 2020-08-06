import React from 'react';
import './App.css';
import StartingPage from "./pages/startingPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

function App() {
  return (
    <Router>
      <div>
        <img src="/images/BG-first-logo.jpg" />
      </div>
      <Route exact path="/" component={StartingPage} />
    </Router>
  );
}

export default App;
