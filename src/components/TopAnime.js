import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TopAnime() {
  const [anime, setAnime] = useState([]);
  useEffect(() => {
    GetTopAnime();
  }, []);

  const GetTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());
    setAnime(temp.top);
  };

  const showTop = () => {
    return anime.map((eachAnime, i) => {
      //console.log(eachAnime.mal_id);
      return (
        
        <Link to={`/MoreDetails/${eachAnime.mal_id}`} key={i} className="links">
<<<<<<< HEAD
            <div className="card">
            <div className="card-image" style={{background:`url(${eachAnime.image_url})`,
            backgroundSize:" cover"
          }}>
              
            </div>
            
              <h4>{eachAnime.title}</h4>
=======
          <div className="card">
            <div
              className="card-image"
              style={{
                background: `url(${eachAnime.image_url})`,
                backgroundSize: " cover",
              }}
            ></div>

            <h4>{eachAnime.title}</h4>
>>>>>>> bcdf141b4ec75d99dc9a2e94b1b64dc8537ecb4f
          </div>
        </Link>
      );
    });
  };
<<<<<<< HEAD
  
  return(
    <div>
    <h4>TOP ANIME</h4>
    <section className="container">
      {showTop()}
    </section>
    
=======

  return (
    <div>
      <section className="container">{showTop()}</section>
>>>>>>> bcdf141b4ec75d99dc9a2e94b1b64dc8537ecb4f
    </div>
  );
}

export default TopAnime;
