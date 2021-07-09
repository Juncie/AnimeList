import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MoreDetails = (props) => {
  const [anime, setAnime] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [comments, setComments] = useState("");
  const [user, setUser] = useState({});
  const [commentSect, setCommentSect] = useState([]);

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/anime/${props.match.params.dynamicId}`).then((res) => {
      setAnime(res.data);
    });
    axios
      .get(`https://api.jikan.moe/v3/anime/${props.match.params.dynamicId}/characters_staff`)
      .then((ren) => {
        setCharacters(ren.data.characters);
      });

    // GET for CommentSection
    axios.get(`https://ironrest.herokuapp.com/AniToonsComments`).then((rex) => {
      setCommentSect(rex.data);
    });
  }, []);

  const showCharacters = () => {
    return characters
      ?.filter((char) => char.role === "Main")
      .map((ele) => {
        return (
          <div>
            <div className="char.imgs-parent">
              <img className="character-images" width="100em" src={ele.image_url}></img>
              <p>{ele.name}</p>
            </div>
          </div>
        );
      });
  };

//console.log(comments);
// Comment post
const handleSubmit = async (e) => {
  e.preventDefault()
  if(localStorage.getItem('user')){
  let obj = {animeId: props.match.params.dynamicId, user: localStorage.getItem('user'), type: "comments", comment: comments }
  //console.log(obj)
  let res = await axios.post(`https://ironrest.herokuapp.com/AniToonsComments`, obj)
   //console.log(res)
  } else {alert('You must be signed in to comment.')}

}

// Favorite post
const handleFavorite = async (e) => {
  if(localStorage.getItem('user')){
    let obj = {animeId: props.match.params.dynamicId, user: localStorage.getItem('user'), type: "favorites", anime: anime}
    //console.log('OBJECT');
    //console.log(obj)
    let res = await axios.post(`https://ironrest.herokuapp.com/AniToonsFavorites`, obj)
    //console.log(res)
  } else {alert('You must be signed in to favorite.')}
  
}

const handleDelete = async () => {
  await axios.delete(`https://ironrest.herokuapp.com/deleteCollection/AniToonsFavorites/`)
}
// delete whole collection: https://ironrest.herokuapp.com/deleteCollection/AniToons2/
// delete individual item https://ironrest.herokuapp.com/AniToons2/60e723692684610017dcbc98

const commentSection=()=> {
  return commentSect.map((eachComment) => {
    // console.log(anime.mal_id);
    // console.log(eachComment.animeId);
    if(eachComment?.animeId === props.match.params.dynamicId && eachComment?.type === "comments"){    
      return (
      <div style={{background:"white", margin:"10px"}}>
        <h3>{eachComment?.user}</h3>
        <p>{eachComment?.comment}</p>
      </div>
      )
    }
 }
 
 )}

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
              <button style={{borderRadius:"5px", padding: "5px"}}  onClick={handleFavorite}>Favorite</button>
              <button style={{borderRadius:"5px", padding: "5px"}}  onClick={handleDelete}>DeleteDB</button>
            </div>
          </div>

          <div className="col-2">
            <h1>{anime.title}</h1>
            <p style={{ textAlign: "justify" }}>{anime.synopsis}</p>

            <div>
              <h2>Main characters</h2>
            </div>

            <div className="char-imgs">{showCharacters()}</div>

            <div className="youtube-vid">
              <iframe src={`${anime.trailer_url}?autoplay=0`} alt="trailer" title="video"></iframe>
            </div>

            {/* Comment Section */}
            <div className="comment-section">
            
            <form onSubmit={handleSubmit}>
                
                {/* <input onChange={handleChange} type="text" placeholder="name" name="user" required /> */}
                
                <textarea onChange={(e) => setComments(e.target.value)} type="text" name="comment" required/>
                
                <input style={{textAlign:"center"}} type="submit" />
           
            </form>
          
            <div>
              {commentSection()}
            </div>
            
            </div>
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default MoreDetails;
