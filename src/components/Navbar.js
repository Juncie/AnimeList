import React, {useState} from "react";
import { Link } from "react-router-dom";


import Search from "./Search";

const Navbar = (props) => {


  return (
    <div className="nav-bar">
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
          <Search setSearch={props.setSearch} search={props.search} animeList={props.animeList} setAnimeList={props.setAnimeList}/>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
