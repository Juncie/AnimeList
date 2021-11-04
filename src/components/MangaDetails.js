import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function MangaDetails(props) {
  const [manga, setManga] = useState([]);

  

  useEffect(() => {
      let details = axios.get(`https://api.jikan.moe/v3/manga/${props.match.params.dynamicId}`);
      setManga(details.data);
  }, []);

  return <div className='more-details'>
      <main className='more-details-info'>
        <section className='sec-1'>
          <div className='col-1'>
            <img src={manga?.image_url} alt={manga?.title} />
            <div>
              <h4>Score: {manga.score}</h4>
              <h4>Chapters: {manga.chapters}</h4>
              <h4>Publishing: {manga.publishing ? "Ongoing" : "Finished"}</h4>
              <h4>Type: {manga.type}</h4>
            </div>
          </div>

          <div className='col-2'>
            <h1>{manga.title}</h1>
            <p style={{ textAlign: "justify" }}>{manga.background}</p>
            <div className='youtube-vid' />
          </div>
        </section>
      </main>
    </div>
}

export default MangaDetails;
