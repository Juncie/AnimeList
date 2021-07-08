import "./App.css";
// Components
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import TopAnime from "./components/TopAnime";
import TopManga from "./components/TopManga";
import MoreDetails from "./components/MoreDetails";
import MangaDetails from "./components/MangaDetails";
import Results from "./components/Results";
import Favorites from "./components/Favorites";
import SignUp from "./components/SignUp";
// Hooks
import React, { useState } from "react";
import { Switch, Link, Route, useHistory } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [mangaList, setMangaList] = useState([]);
  let history = useHistory();

  const HandleSearch = (e) => {
    e.preventDefault();

    console.log("App.js - HandleSearch user input:");
    console.log(search);
    FetchAnime(search); //Call FetchAnime function

    FetchManga(search);
  };

  const FetchAnime = async (query) => {
    //Fetch anime from Jikan API
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    console.log("App.js - FETCH ANIME RESULTS:");
    console.log(temp.results);
    setAnimeList(temp.results);

    //ALTERNATIVELY, DISABLE FetchManga AND FetchManga(search) AND UNCOMMENT THIS CODE BELOW
    //Fetch manga from Jikan API
    // const temp2 = await fetch(
    //   `https://api.jikan.moe/v3/search/manga?q=${query}&order_by=title&sort=asc&limit=10`
    // ).then((res) => res.json());

    // console.log('App.js - FETCH MANGA RESULTS:');
    // console.log(temp2.results);
    // setMangaList(temp2.results);

    history.push("/Results");
  };

  const FetchManga = async (query) => {
    //Fetch manga from Jikan API
    const temp2 = await fetch(
      `https://api.jikan.moe/v3/search/manga?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    console.log("App.js - FETCH MANGA RESULTS:");
    console.log(temp2.results);
    setMangaList(temp2.results);

    history.push("/Results");
  };

  return (
    <div className="App">
      <Navbar
        search={search}
        setSearch={setSearch}
        HandleSearch={HandleSearch}
        animeList={animeList}
        setAnimeList={setAnimeList}
        mangaList={mangaList}
        setMangaList={setMangaList}
      />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/TopAnime"
          render={(props) => <TopAnime {...props} />}
        />
        <Route
          exact
          path="/TopManga"
          render={(props) => <TopManga {...props} />}
        />
        <Route
          exact
          path="/MoreDetails/:dynamicId"
          render={(props) => <MoreDetails {...props} />}
        />
        <Route
          exact
          path="/MangaDetails/:dynamicId"
          render={(props) => <MangaDetails {...props} />}
        />
        <Route
          exact
          path="/Results"
          render={(props) => (
            <Results animeList={animeList} mangaList={mangaList} {...props} />
          )}
        />
        <Route
          exact
          path="/Favorites"
          render={(props) => <Favorites {...props} />}
        />
        <Route
          exact
          path="/SignUp"
          render={(props) => <SignUp {...props} />}
        />
      </Switch>
    </div>
  );
}

export default App;

//GUIDE ON HOW TO USE JIKAN ANIME API (MAL API BUT EASIER TO USE)
//https://www.youtube.com/watch?v=ZZA-QrBBM3YG
// Jikan API url: https://jikan.docs.apiary.io/#
// Niko's ironrest API: https://ironrest.herokuapp.com/AniToons
