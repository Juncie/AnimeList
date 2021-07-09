import React from "react";
import { Link } from "react-router-dom";

function Results(props) {
  const animeCard = () => {
    return props.animeList.map((eachAnime, i) => {
      //console.log(eachAnime);
      return (
        <Link to={`/MoreDetails/${eachAnime.mal_id}`} key={i} className="links">
          <div className="card">
            <div
              className="card-image"
              style={{
                background: `url(${eachAnime?.image_url})`,
                backgroundSize: " cover",
              }}
            ></div>

            <h4>{eachAnime.title}</h4>
          </div>
        </Link>
      );
    });
  };

  const mangaCard = () => {
    return props.mangaList.map((eachManga, i) => {
      //console.log(eachManga);
      return (
        <Link to={`/MoreDetails/${eachManga.mal_id}`} key={i} className="links">
          <div className="card">
            <div
              className="card-image"
              style={{
                background: `url(${eachManga?.image_url})`,
                backgroundSize: " cover",
              }}
            ></div>

            <h4>{eachManga.title}</h4>
          </div>
        </Link>
      );
    });
  };

  return (
    <div>
      <div className="container">
        <h1>Anime</h1>
        {animeCard()}
      </div>

      <div className="container">
        <h1>Manga</h1>
        {mangaCard()}
      </div>
    </div>
  );
}

export default Results;
