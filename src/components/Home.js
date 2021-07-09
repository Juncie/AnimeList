import React, { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div class="pcf-carousel items-3">
        {/* <!-- Hidden radio control inputs --> */}
        <input type="radio" id="carousel-play" name="pcf-carousel-3" checked />
        <input type="radio" id="carousel-start-1" name="pcf-carousel-3" />
        <input type="radio" id="carousel-start-2" name="pcf-carousel-3" />
        <input type="radio" id="carousel-start-3" name="pcf-carousel-3" />
        {/* <!-- Pause/play button --> */}
        <label for="carousel-play" class="btn-play" title="Play"></label>
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
            <h1>View information about your favorite anime</h1>
          </div>

          <div
            class="pcf-carousel-item"
            style={{ backgroundImage: `url(https://1.bp.blogspot.com/-a5i5ZCv4c28/XSRKIKM8NBI/AAAAAAAAAjs/rIE6Puc4p5IB0BkPj36lq6ZLb4o9fJlegCKgBGAs/w3840-h1080-p-k-no-nu/amored-titan-vs-attack-titan-attack-on-titan-uhdpaper.com-4K-165.jpg)` }}
          >
            <h1>Check out our list of Top Manga!</h1>
          </div>

          <div
            class="pcf-carousel-item"
            style={{
              backgroundImage: `
    url(https://gamehag.com//img/rewards/background/dragon-ball-fighterz-pc-global_max.jpg)`,
            }}
          ></div>

          <div
            class="pcf-carousel-item"
            style={{
              backgroundImage: `url(https://static.pexels.com/photos/371633/pexels-photo-371633.jpeg)`,
            }}
          >
            <h1>Share your thoughts about the anime you like!</h1>
          </div>
        </div>
        <div style={{ height: "50em", color: "white" }}></div>
      </div>
      <div style={{ background: "green" }}>DIV HERE</div>
      <div style={{ background: "red" }}>DIV HERE</div>
      <div style={{ background: "blue" }}>DIV HERE</div>

      
      <div>
        <img src={`https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c6f1009-9bed-42c1-90b2-5672c47100ef/d6mwl0m-ca65a3e0-1430-4695-8514-bb4422c4803e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjNmYxMDA5LTliZWQtNDJjMS05MGIyLTU2NzJjNDcxMDBlZlwvZDZtd2wwbS1jYTY1YTNlMC0xNDMwLTQ2OTUtODUxNC1iYjQ0MjJjNDgwM2UucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1ZWES6x_Yu6o3MGskj7-9iI6K5iNjseECtBZ8nb3nPk`} />
      </div>
        <footer className="footer">
          <h2>Follow Us</h2>
          <div>
            <a href="https://www.facebook.com/Thisguy225" target="_blank"><img src="https://img.icons8.com/color/48/000000/facebook.png"/></a>
            <a href="https://www.instagram.com/hit_mann2k/" target="_blank"><img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/></a>
            <a href="https://github.com/Juncie/AnimeList" target="_blank"><img src="https://img.icons8.com/color/48/000000/github--v3.png"/></a>
          </div>
        <img
          id="itadori"
          src={
            "https://preview.redd.it/pe9cnryyuw061.png?width=814&format=png&auto=webp&s=1c1f1a709e4b241ef24369a8d1b1b73168c32675"
          }
          alt=""
        />
 </footer>
      </div>
  );
};

export default Home;
