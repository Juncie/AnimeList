import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TopAnime from "./components/TopAnime";
import TopManga from "./components/TopManga";
import AnimeDetails from "./components/AnimeDetails";
import MangaDetails from "./components/MangaDetails";
import Results from "./components/Results";
import Favorites from "./components/Favorites";
import SignUp from "./components/SignUp";


function App() {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [mangaList, setMangaList] = useState([]);

  let [name, setName] = useState(localStorage.getItem("user"));

  let history = useHistory();

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
    FetchManga(search);
  };

  const FetchAnime = async (query) => {
    const AnimeTemp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`).then((res) => res.json());
    setAnimeList(AnimeTemp.results);
    history.push("/Results");
  };

  const FetchManga = async (query) => {
    const MangaTemp = await fetch(`https://api.jikan.moe/v3/search/manga?q=${query}&order_by=title&sort=asc&limit=10`).then((res) => res.json());
    setMangaList(MangaTemp.results);
    history.push("/Results");
  };

  return <div className='App'>
      <Navbar
        search={search}
        setSearch={setSearch}
        HandleSearch={HandleSearch}
        animeList={animeList}
        setAnimeList={setAnimeList}
        mangaList={mangaList}
        setMangaList={setMangaList}
        name={name}
        setName={setName}
      />

      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/TopAnime' render={(props) => <TopAnime {...props} />} />
        <Route exact path='/TopManga' render={(props) => <TopManga {...props} />} />
        <Route exact path='/AnimeDetails/:dynamicId' render={(props) => <AnimeDetails {...props} />} />
        <Route exact path='/MangaDetails/:dynamicId' render={(props) => <MangaDetails {...props} />} />
        <Route exact path='/Results' render={(props) => <Results animeList={animeList} mangaList={mangaList} {...props} />} />
        <Route exact path='/Favorites' render={(props) => <Favorites {...props} />} />
        <Route exact path='/SignUp' render={(props) => <SignUp name={name} setName={setName} {...props} />} />
      </Switch>
    </div>
 
}

export default App;