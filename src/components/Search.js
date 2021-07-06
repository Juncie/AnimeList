import React from "react";
import { useState } from "react";
import AnimeCard from "./AnimeCard";
import {Link, useHistory} from "react-router-dom"

function Search(props) {
    let history = useHistory();
//   const [animeList, SetAnimeList] = useState([]);
//   const [search, SetSearch] = useState("");

  const HandleSearch = (e) => {
    e.preventDefault();

    console.log(props.search);
    FetchAnime(props.search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`
    ).then((res) => res.json());

    console.log(temp.results);
    console.log(props);
    props.setAnimeList(temp.results);
    history.push("/Results")
  };
  
  return (
    <div>
      <form onSubmit={HandleSearch}>
      
        {/* <Link to="/Search"> */}
            <input
              type="search"
              placeholder="Search"
              requiredvalue={props.search}
              onChange={(e) => props.setSearch(e.target.value)}
            ></input>
        {/* </Link> */}
      </form>
      
      {/* <div className="anime-list">
        {props.animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div> */}
    </div>
  );
}

export default Search;
