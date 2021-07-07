import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

  return (
    <div style={{top:"0", position:"sticky"}} className="nav-bar">
      <nav>
        <section className="logo">
          <h1>
            Ani<span className="Toons">Toons</span>
          </h1>
          <h5>Everything you never knew you wanted</h5>
        </section>

        <section className="options">
          <Link to="/">
            {" "}
            <h3> Home </h3>{" "}
          </Link>
          <Link to="/TopAnime/">
            {" "}
            <h3> Top Anime </h3>{" "}
          </Link>
          <Link to="/Manga/">
            {" "}
            <h3> Manga </h3>{" "}
          </Link>
          <div>
            <form onSubmit={props.HandleSearch}>            
                  <input
                    type="search"
                    placeholder="Search"
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
