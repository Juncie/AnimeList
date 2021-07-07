import React from "react";
import AnimeCard from "./AnimeCard";

function Results(props) {
  console.log(props);
  return (
    <div>
      {/* <form onSubmit={props.HandleSearch}>
        <input
          type="search"
          placeholder="Search"
          requiredvalue={props.search}
          onChange={(e) => props.SetSearch(e.target.value)}
        ></input>
      </form> */}

      <div className="show-box">
        <h1>Anime</h1>
        {props.animeList.map((anime) => (
          <AnimeCard anime={anime} key={anime.mal_id} />
        ))}
      </div>
    </div>
  );
}

export default Results;
