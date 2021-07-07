import './App.css';
// Components
import Home from './components/Home';
import Navbar from './components/Navbar';
import TopAnime from './components/TopAnime';
import Manga from './components/Manga';
import MoreDetails from './components/MoreDetails';
import Results from "./components/Results";
// Hooks
import React, {useState} from 'react';
import { Switch, Link, Route, useHistory } from 'react-router-dom';


function App() {

  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  let history = useHistory();
  
    const HandleSearch = (e) => {
      e.preventDefault();
  
      console.log(search);
      FetchAnime(search);
    };
  
    const FetchAnime = async (query) => {
      const temp = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
      ).then((res) => res.json());
  
      console.log(temp.results);
      setAnimeList(temp.results);
      history.push("/Results")
    };

  return (
    <div className="App">
      <Navbar setSearch={setSearch} search={search} animeList={animeList} setAnimeList={setAnimeList} HandleSearch={HandleSearch}/>
      {/* <Link to="/Results" /> */}
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/TopAnime"
          render={(props) => <TopAnime {...props} />}
        /> 
        <Route exact path="/Manga" render={(props) => <Manga {...props} />} />
        <Route exact path="/MoreDetails/:dynamicId" render={(props) => <MoreDetails {...props} />} />
        <Route exact path="/Results" render={(props) => <Results animeList={animeList} {...props} />} />
      </Switch>
    </div>
  );
}

export default App;

//GUIDE ON HOW TO USE JIKAN ANIME API (MAL API BUT EASIER TO USE)
//https://www.youtube.com/watch?v=ZZA-QrBBM3YG
// Jikan API url: https://jikan.docs.apiary.io/#