import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  
  
  const [upcomingAnime, setUpcomingAnime] = useState([])
  const [upManga, setUpManga] = useState([])
  // const [upcomingAnime, setUpcomingAnime] = useState([])
    useEffect(() => {
    axios
      .get(`https://api.jikan.moe/v3/top/anime/1/upcoming`)
      .then((res) => {
        setUpcomingAnime(res.data.top);
        console.log(res.data.top);
        
        axios
        .get(
          `https://api.jikan.moe/v3/top/manga/1/novels`
        )
        .then((ren) => {
          setUpManga(ren.data.top);
          console.log(ren.data);
        });
      });
  }, []);
  console.log(upcomingAnime);
const showTopUp = () => {
  return upcomingAnime.map((eachAnime, u) => {
    return (
      
      <Link to={`/MoreDetails/${eachAnime.mal_id}`} key={u} className="links">
          <div className="card">
          <div className="card-image" style={{background:`url(${eachAnime.image_url})`,
          backgroundSize:" cover"
        }}>
            
          </div>
            <h5>{eachAnime.title}</h5>
        </div>
      </Link>
    );
  });
};

const showManga = () => {
  return upManga.map((eachManga,x) => {
    return (
      
      <Link to={`/MangaDetails/${eachManga.mal_id}`} key={x} className="links">
          <div className="card">
          <div className="card-image" style={{background:`url(${eachManga.image_url})`,
          backgroundSize:" cover"
        }}>
            
          </div>
          
            <h5>{eachManga.title}</h5>
        </div>
      </Link>
    );
  });
};


  

return (
    <div className="home-page">
      <div class="pcf-carousel items-3">
        {/* <!-- Hidden radio control inputs --> */}
        <input type="radio" id="carousel-play" name="pcf-carousel-3" checked />
        <input type="radio" id="carousel-start-1" name="pcf-carousel-3" />
        <input type="radio" id="carousel-start-2" name="pcf-carousel-3" />
        <input type="radio" id="carousel-start-3" name="pcf-carousel-3" />
        {/* <!-- Pause/play button --> */}
        <label htmlFor="carousel-play" class="btn-play" title="Play"></label>
        {/* <!-- Slide jump dots --> */}
        <div class="pcf-carousel-dots">
          <label for="carousel-start-1"></label>
          <label for="carousel-start-2"></label>
          <label for="carousel-start-3"></label>
        </div>
        <div class="pcf-carousel-anime-dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* <!-- Slides, repeat 1st and last slide --> */}
        <div class="moving-strip">
          <div
            class="pcf-carousel-item"
            style={{
              backgroundImage: `url(https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwIiTkyDLNUR8n4dxYO49GCs)`,
            }}
          >
          </div>

          <div
            class="pcf-carousel-item"
            style={{ backgroundImage: `url(https://1.bp.blogspot.com/-a5i5ZCv4c28/XSRKIKM8NBI/AAAAAAAAAjs/rIE6Puc4p5IB0BkPj36lq6ZLb4o9fJlegCKgBGAs/w3840-h1080-p-k-no-nu/amored-titan-vs-attack-titan-attack-on-titan-uhdpaper.com-4K-165.jpg)` }}
          >
          </div>

          <div
            class="pcf-carousel-item"
            style={{
              backgroundImage: `
    url(https://gamehag.com//img/rewards/background/dragon-ball-fighterz-pc-global_max.jpg)`,
            }}
          >
          </div>

          <div
            class="pcf-carousel-item"
            style={{
              backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d98ceddd-228a-439b-a6f1-3266a6be0e2e/dectbcn-99a7c5c9-1030-4013-a32b-344c1c2f33e4.png/v1/fill/w_1280,h_377,q_80,strp/anime_banner_black_and_white_by_nenexhanako_dectbcn-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Mzc3IiwicGF0aCI6IlwvZlwvZDk4Y2VkZGQtMjI4YS00MzliLWE2ZjEtMzI2NmE2YmUwZTJlXC9kZWN0YmNuLTk5YTdjNWM5LTEwMzAtNDAxMy1hMzJiLTM0NGMxYzJmMzNlNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7RDbYqmQjUW5jz7sWBWxWvEfsb3QAR3_Qn-8d3O6Ax4)`,
            }}
          >
          </div>
        </div>
        <div style={{ height: "50em", color: "white" }}></div>
      </div>
       
       <h1 style={{fontFamily: "Luckiest Guy"}}>Upcoming Anime</h1>
      <section id="airing">
     
         
       
        {showTopUp()}
      
      </section >
      <h1 style={{fontFamily: "Luckiest Guy"}}>Manga Novels</h1>
      <section id="upComingManga">
      {showManga()}

      </section>

      
        <footer className="footer">
         
            <a href="https://www.facebook.com/Thisguy225" target="_blank"><img src="https://img.icons8.com/color/48/000000/facebook.png"/></a>
            <a href="https://www.instagram.com/hit_mann2k/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
          <img
            id="itadori"
            src={
              "https://preview.redd.it/pe9cnryyuw061.png?width=814&format=png&auto=webp&s=1c1f1a709e4b241ef24369a8d1b1b73168c32675"
            }
            alt=""
          />
            <a href="https://github.com/Juncie/AnimeList" target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v3.png"/></a>
            <a href="https://twitter.com/PJuncie" target="_blank"><img src="https://img.icons8.com/color/48/000000/twitter--v2.png"/></a>
        
 </footer>
      </div>
  );
};

export default Home;
