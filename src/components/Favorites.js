import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Favorites(props) {
  const [favorites, setFavorites] = useState([]);
  const LogOut = () => {
    localStorage.removeItem("user");
    props.history.push("/");
    window.location.reload();
  }
  
  useEffect(() => {
    axios
    .get(`https://ironrest.herokuapp.com/findAll/AniToonsFavorites?user=${localStorage.getItem("user")}`)
    .then(rex=> setFavorites(rex.data));
  }, []);

  const showFavorites = () => {
    return favorites.map((eachAnime, i) => {
      return <Link to={`/AnimeDetails/${eachAnime.animeId}`} key={i} className='links'>
          <div className='card'>
            <div className='card-image' style={{ background: `url(${eachAnime?.anime?.image_url})`, backgroundSize: " cover" }} /> 
            <h4>{eachAnime.anime.title}</h4>
          </div>
        </Link>
    });
  };
  return <div>
        <h1>Favorites</h1>
        <button onClick={LogOut}>
          Logout
        </button>
      <div className='container'>{showFavorites()}</div>
    </div>

}

export default Favorites;
