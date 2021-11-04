import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TopAnime() {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    GetTopAnime();
  }, []);

  const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
    .then((res) => res.json());
    setAnime(temp.top);
  };

  const showTop = () => {
    return anime.map((eachAnime, i) => {
      return <Link to={`/AnimeDetails/${eachAnime.mal_id}`} key={i} className="links">
          <div className="card">
            <div
              className="card-image"
              style={{ background: `center / cover no-repeat url(${eachAnime.image_url})`}}
            />
            <h4>{eachAnime.title}</h4>
          </div>
        </Link>
    });
  };

  return <div>
    <h1 className='primaryText titleText'>
      TOP ANIME
    </h1>
    <section className="container">
      {showTop()}
    </section>
    </div>
}

export default TopAnime;
