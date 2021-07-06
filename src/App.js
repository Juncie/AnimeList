import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import axios from 'axios';
import { Switch, Link, Route } from 'react-router-dom';
import TopAnime from './components/TopAnime';
import Manga from './components/Manga';
import MoreDetails from './components/MoreDetails';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/TopAnime" render={(props) => <TopAnime {...props} />} />
        <Route exact path="/Manga" render={(props) => <Manga {...props} />} />
        <Route exact path="/MoreDetails" render={(props) => <MoreDetails {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

//GUIDE ON HOW TO USE JIKAN ANIME API (MAL API BUT EASIER TO USE)
//https://www.youtube.com/watch?v=ZZA-QrBBM3YG