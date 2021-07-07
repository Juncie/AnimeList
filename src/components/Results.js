import React from "react";
import {Link } from 'react-router-dom'

function Results(props) {

    function AnimeCard(props) {
        console.log("props.url");
        console.log(props.anime);
        return (

          <article className="anime-card">          
          <Link to={`/MoreDetails/${props.anime.mal_id}`} className='links'>
              <figure>
                <img src={props.anime.image_url} alt="Anime" />
              </figure>
              <h3>{props.anime.title}</h3>
              </Link>
          </article>
        );
      }

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
