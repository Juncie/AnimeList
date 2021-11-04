import React from "react";
import { Link } from "react-router-dom";

function Results(props) {
  
  const animeCard = () => {
    return props.animeList.map((eachAnime, i) => {
      return <Link to={`/AnimeDetails/${eachAnime?.mal_id}`} key={i} className="links">
          <div className="card">
            <div className="card-image" style={{background: `no-repeat url(${eachAnime?.image_url})`, backgroundSize: '100% 100%'}} />
            <h4>{eachAnime.title}</h4>
          </div>
        </Link>
    });
  };

  const mangaCard = () => {
    return props.mangaList.map((eachManga, i) => {
      return <Link to={`/AnimeDetails/${eachManga?.mal_id}`} key={i} className="links">
          <div className="card">
            <div
              className="card-image"
              style={{ background: `url(${eachManga?.image_url})`, backgroundSize: " cover"}}
            />
            <h4>{eachManga?.title}</h4>
          </div>
        </Link>
    });
  };

  return <div>
        <h1>Anime</h1>
      <section>
        <div className="container">{animeCard()}</div>
      </section>
        <h1>Manga</h1>
      <section>
        <div className="container">{mangaCard()}</div>
      </section>
    </div>
}

export default Results;
