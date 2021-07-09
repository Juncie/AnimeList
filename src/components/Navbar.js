import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {


  return (
    <div style={{top:"0", position:"sticky", zIndex:"2"}} className="nav-bar">
      <nav onScroll={{background:'grey'}}>
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
            <h4> Top Anime </h4>{" "}
          </Link>
          <Link to="/TopManga" className="links">
            {" "}
            <h4> Top Manga </h4>{" "}
          </Link>


          {props.name?
          <Link to="/Favorites" className="links">
            {" "}
            <h4>{props.name}'s  Profile </h4>{" "}
          </Link> : 
          <Link to="/SignUp" className="links">
            {" "}
            <h3> Sign Up </h3>{" "}
          </Link>
          }
          <div>
            <form onSubmit={props.HandleSearch}>
              <button className="nav-bar-search-button" type="submit" placeholder="no"><img width="20%" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/docomo/205/left-pointing-magnifying-glass_1f50d.png" /></button>
                  <input
                    className="nav-search-bar"
                    type="search"
                    placeholder="Search AniToons"
                    requiredvalue={props.search}
                    onChange={(e) => props.setSearch(e.target.value)}
                  ></input>
                  <button className="nav-bar-search-button" type="submit" placeholder="no"><img width="20%" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/docomo/205/left-pointing-magnifying-glass_1f50d.png" /></button>
            </form>            
          </div>
        </section>
      </nav>
    </div>
  );
};

export default Navbar;
