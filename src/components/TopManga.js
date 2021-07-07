import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopManga = () => {
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
  console.log(topManga.mal_id);

  const showTop = () => {
    return topManga.map((eachManga, i) => {
      console.log(eachManga.mal_id);
      return (
        <Link to={`/MoreDetails/${eachManga.mal_id}`} key={i} className="links">
          <div key={i}>
            <img src={eachManga.image_url} className="images" alt="top manga"/>

            <h2>{eachManga.title}</h2>
          </div>
        </Link>
      );
    });
  };

  return <div className="show-box">{showTop()}</div>;
};

export default TopManga;
