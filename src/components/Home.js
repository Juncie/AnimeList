import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [upcomingAnime, setUpcomingAnime] = useState([]);
  const [upManga, setUpManga] = useState([]);
  
  const ProfileLinks = {
    facebook: 'https://www.facebook.com/Thisguy225',
    instagram: 'https://www.instagram.com/hit_mann2k/',
    github: 'https://github.com/Juncie/AnimeList',
    twitter: 'https://twitter.com/PJuncie',
  }


  useEffect(() => {
    axios
        .get(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
        .then(res => setUpcomingAnime(res.data.top))

      axios
          .get(`https://api.jikan.moe/v3/top/manga/1/novels`)
          .then(ren => setUpManga(ren.data.top));
  }, []);

  const showTopUp = () => {
    return upcomingAnime.map((eachAnime, u) => {
      return (
        <Link to={`/AnimeDetails/${eachAnime.mal_id}`} key={u} className='links'>
          <div className='card'>
            <div className='card-image' style={{ background: `no-repeat 100% url(${eachAnime.image_url})` }} />
            <h5>{eachAnime.title}</h5>
          </div>
        </Link>
      );
    });
  };

  const showManga = () => {
    return upManga.map((eachManga, i) => {
      return (
        <Link to={`/MangaDetails/${eachManga.mal_id}`} key={i} className='links'>
          <div className='card'>
            <div className='card-image' style={{ background: `no-repeat 100% url(${eachManga.image_url})` }} />
            <h5>{eachManga.title}</h5>
          </div>
        </Link>
      );
    });
  };

  return (
    <div className='homePage'>
      {/* CAROUSEL GOES HERE */}
      <h1 className='primaryText'>
        Upcoming
      </h1>
      <section id='airing'>
        {showTopUp()}
      </section>
      <h1 className='primaryText'>Manga Titles</h1>
      <section id='upComingManga'>{showManga()}</section>

      <footer className='footer'>
        <a href={ProfileLinks.facebook} >
          <img src='https://img.icons8.com/color/48/000000/facebook.png' alt='Facebook Icon' />
        </a>
        <a href={ProfileLinks.instagram} >
          <img src='https://img.icons8.com/fluent/48/000000/instagram-new.png' alt='Instagram Icon' />
        </a>
        <img id='itadori'src={"https://preview.redd.it/pe9cnryyuw061.png?width=814&format=png&auto=webp&s=1c1f1a709e4b241ef24369a8d1b1b73168c32675"} alt='Itadori' />
        <a href={ProfileLinks.github} >
          <img src='https://img.icons8.com/color/48/000000/github--v3.png' alt='GitHub Icon' />
        </a>
        <a href={ProfileLinks.twitter} >
          <img src='https://img.icons8.com/color/48/000000/twitter--v2.png' alt='Twitter Icon' />
        </a>
      </footer>
    </div>
  );
};

export default Home;
