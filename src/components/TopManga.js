import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function TopManga() {
  const [topManga, setTopManga] = useState([]);
  useEffect(() => {
    getTopManga();
  }, []);

  const getTopManga = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/manga/1/bypopularity`
    ).then((res) => res.json());
    setTopManga(temp.top);
  };
  //console.log(topManga);

  const showTopManga = () => {
    return topManga.map((eachManga, i) => {
      //console.log(eachManga.mal_id);
      return (
        <Link to={`/MangaDetails/${eachManga.mal_id}`} key={i} className="links">
          <div className="card">
            <div
              className="card-image"
              style={{
                background: `url(${eachManga.image_url})`,
                backgroundSize: " cover",
              }}
            ></div>

            <h4>{eachManga.title}</h4>
          </div>
        </Link>
      );
    });
  };

  return <div className="container">{showTopManga()}</div>;
}

export default TopManga;
