import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import axios from "axios";
import { Switch, Link, Route } from "react-router-dom";
import TopAnime from "./components/TopAnime";
import Manga from "./components/Manga";
import Search from "./components/Search";
import Results from "./components/Results";


function App() {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);

  return (
    <div className="App">
      <Navbar setSearch={setSearch} search={search} animeList={animeList} setAnimeList={setAnimeList}/>
      <Link to="/Results" />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/TopAnime"
          render={(props) => <TopAnime {...props} />}
        />
        <Route exact path="/Manga" render={(props) => <Manga {...props} />} />
        <Route exact path="/Results" render={(props) => <Results animeList={animeList} {...props} />} />
        <Route exact path="/Search" render={(props) => <Search setSearch={setSearch} search={search} animeList={animeList} setAnimeList={setAnimeList} {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

//GUIDE ON HOW TO USE JIKAN ANIME API (MAL API BUT EASIER TO USE)
//https://www.youtube.com/watch?v=ZZA-QrBBM3YG
