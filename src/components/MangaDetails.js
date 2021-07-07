import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function MangaDetails(props) {
  console.log(props);
  console.log("workkk");
  const [manga, setManga] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const res = axios
      .get(`https://api.jikan.moe/v3/manga/${props.match.params.dynamicId}`)
      .then((res) => {
        setManga(res.data);
        console.log(res);

        const ren = axios
          .get(
            `https://api.jikan.moe/v3/manga/${props.match.params.dynamicId}/characters_staff`
          )
          .then((ren) => {
            setCharacters(ren.data);
            console.log(ren.data);
          });
      });
  }, []);

  return (
    <div className="more-details">
      <main className="more-details-info">
        <section className="sec-1">
          <div className="col-1">
            <img src={manga.image_url} />

            <div>
              <h4>Score: {manga.score}</h4>
              <h4>Chapters: {manga.chapters}</h4>
              <h4>
                Publishing:{" "}
                { manga.publishing ? "Ongoing" : "Finished"}
              </h4>
              <h4>Type: {manga.type}</h4>
            </div>
          </div>

          <div className="col-2">
            <h1>{manga.title}</h1>
            <p style={{ textAlign: "justify" }}>{manga.background}</p>
            <img src={characters.image_url} />
            <div className="youtube-vid"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default MangaDetails;
