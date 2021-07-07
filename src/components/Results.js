import React from "react";
import { Link } from "react-router-dom";

function Results(props) {
  const animeCard = () => {
    //console.log(props.animeList);

    return props.animeList.map((ele) => {
      return (
        <article className="anime-card">
          <Link to={`/MoreDetails/${ele.mal_id}`} className="links">
            <figure>
              <img src={ele.image_url} alt="Anime" />
            </figure>
            <h3>{ele.title}</h3>
          </Link>
        </article>
      );
    });
  };

  const mangaCard = () => {
    //console.log(props.mangaList);

    return props.mangaList.map((ele) => {
      return (
        <article className="anime-card">
          <Link to={`/MoreDetails/${ele.mal_id}`} className="links">
            <figure>
              <img src={ele.image_url} alt="Anime" />
            </figure>
            <h3>{ele.title}</h3>
          </Link>
        </article>
      );
    });
  };

  return (
    <div>
      <div className="show-box">
        <h1>Anime</h1>

        {animeCard()}
      </div>

      <div className="show-box">
        <h1>Manga</h1>

        {mangaCard()}
      </div>
    </div>
  );
}

export default Results;
