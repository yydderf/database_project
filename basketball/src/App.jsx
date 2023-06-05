import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/nav/Navbar';
import Home from "./components/pages/Home";
import Team from "./components/pages/Team";
import Player from "./components/pages/Player";
import Predict from "./components/pages/Predict";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/Team" element={ <Team /> } />
          <Route path="/Player" element={ <Player /> } />
          <Route path="/Predict" element={ <Predict /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App
