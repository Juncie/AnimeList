import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TopManga() {
  const [topManga, setTopManga] = useState([]);
  
  useEffect(() => {
    getTopManga();
  }, []);

  const getTopManga = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/manga/1/bypopularity`)
    .then(res => res.json());
    setTopManga(temp.top);
  };

  const showTopManga = () => {
    return topManga.map((eachManga, i) => {
      return <Link to={`/MangaDetails/${eachManga.mal_id}`} key={i} className="links">
          <div className="card">
            <div
              className="card-image"
              style={{ background: `url(${eachManga.image_url})`, backgroundSize: " cover"}}
            />
            <h4>{eachManga.title}</h4>
          </div>
        </Link>
    });
  };

  return <div>
    <h1 className='primaryText titleText'>TOP MANGA</h1>
    <section className="container">
      {showTopManga()}
    </section>
    </div>
}
export default TopManga;
