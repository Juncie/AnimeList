import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return (
    <div style={{top:"0", position:"sticky"}} className="nav-bar">
      <nav>
      <Link to="/" className="links">
        <section className="logo">
          <h1>
            Ani<span className="Toons">Toons</span>
          </h1>
          <h5>Everything you never knew you wanted</h5>
        </section>
      </Link>

        <section className="options">
          <Link to="/TopAnime" className="links">
            {" "}
            <h3> Top Anime </h3>{" "}
          </Link>
          <Link to="/TopManga" className="links">
            {" "}
            <h3> Top Manga </h3>{" "}
          </Link>
          <Link to="/Favorites" className="links">
            {" "}
            <h3> Favorites </h3>{" "}
          </Link>
          <div>
            <form onSubmit={props.HandleSearch}>
                  <input
                    type="search"
                    placeholder="Search AniToons"
                    requiredvalue={props.search}
                    onChange={(e) => props.setSearch(e.target.value)}
                  ></input>
            </form>
            
            {/* <div className="anime-list">
              {props.animeList.map((anime) => (
                <AnimeCard anime={anime} key={anime.mal_id} />
              ))}
            </div> */}
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
