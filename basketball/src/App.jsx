import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar2 from './components/nav/Navbar';
import Footer from './components/footer/Footer';
import Home from "./components/pages/Home";
import TeamCards from "./components/pages/TeamCards";
import Teams from "./components/pages/Teams";
import Player from "./components/pages/Player";
import Predict from "./components/pages/Predict";
import NotFound from "./components/pages/NotFound";
import About from './components/pages/About';
import Data from './components/pages/Data';
import Action from './components/pages/Action';

import RecordList from './components/pages/recordList';
import TeamList from './components/pages/teamList';
import Edit from './components/pages/edit';
import Create from './components/pages/create';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <NavigationBar2 />
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="Teams" element={ <TeamCards /> } />
            <Route path="Players" element={ <Player /> } />
            <Route path="Predict" element={ <Predict /> } />
            <Route path="About" element={ <About /> } />
            <Route path="Teams/:team_name" element={ <Teams/> } />
            <Route path="Data" element={ <Data /> }/>
            <Route path="Data/:action" element={ <Action /> } />
            <Route path="/record" element={<RecordList />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/create" element={<Create />} />
            <Route path="/team" element={<TeamList />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App
