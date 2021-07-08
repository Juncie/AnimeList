import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MoreDetails = (props) => {
  const [anime, setAnime] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [comments, setComments] = useState({})

  useEffect(() => {
    const res = axios.get(`https://api.jikan.moe/v3/anime/${props.match.params.dynamicId}`).then((res) => {
      setAnime(res.data);
    });
    const ren = axios
      .get(`https://api.jikan.moe/v3/anime/${props.match.params.dynamicId}/characters_staff`)
      .then((ren) => {
        setCharacters(ren.data.characters);
      });
  }, []);

  const showCharacters = () => {
    return characters?.filter((char) => char.role === "Main").map(ele =>{
        return (
            <div>
              <div className="char.imgs-parent">
                  <img className="character-images" width="100em" src={ele.image_url}></img>
                  <p>{ele.name}</p>
                </div>
                
            </div>
        )
    })
  };

//Comment Section 


const postFunc = async () => {
 
  let res = await axios.post(`https://ironrest.herokuapp.com/AniToons`, {_id:"comments", comments: comments})
    .then((res) => setComments(res))
    console.log('this is working');
}

const handleChange = (e) => {
  console.log(e.target.name, e.target.value)
}

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(`${comments.user} submitted a post!`)
}

 


return (
    <div className="more-details">
      <main className="more-details-info">
        <section className="sec-1">
          <div className="col-1">
            <img src={anime.image_url} />

            <div>
              <h4>Type: {anime.type}</h4> 
              <h4>Score: {anime.score}</h4>
              <h4>Episodes: {anime.episodes}</h4>
              <h4>Airing: {anime.status}</h4>
              <h4>Air Dates: {anime.aired?.string}</h4>
            </div>
          </div>

          <div className="col-2">
            <h1>{anime.title}</h1>
            <p style={{ textAlign: "justify" }}>{anime.synopsis}</p>
            
            <div>
                <h2>Main characters</h2>
            </div>
             
             <div className="char-imgs">
                 {showCharacters()}
            </div>
            
            <div className="youtube-vid">
              <iframe src={anime.trailer_url} alt="trailer"></iframe>
            </div>
    {/* Comment Section */}
            <div className="comment-section">
            
            <form onSubmit={handleSubmit}>  
                
                <input onChange={handleChange} type="text" placeholder="name" name="user" />
                
                <textarea onChange={handleChange} type="text" name="comment"/>
                
                <input style={{textAlign:"center"}} type="submit" />
            
            </form>
            
            </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default MoreDetails;
