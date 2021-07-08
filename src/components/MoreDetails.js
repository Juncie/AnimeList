import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MoreDetails = (props) => {
  const [anime, setAnime] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [comments, setComments] = useState({})
  const [user, setUser] = useState({})
  const[commentSect, setCommentSect]=useState([])

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
    axios
      .get(`https://ironrest.herokuapp.com/AniToons2`)
      .then((rex) => {
        setCommentSect(rex.data);
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

const handleSubmit = async (e) => {
  await axios.post(`https://ironrest.herokuapp.com/AniToons2`, {id:props.match.params.dynamicId, type: "comments", content: user })
}

const handleFavorite = async () => {
  await axios.post(`https://ironrest.herokuapp.com/AniToons2`, {id:props.match.params.dynamicId, type: "favorite"})

}

// const handleDelete = async () => {
//   await axios.delete(`https://ironrest.herokuapp.com/AniToons2/60e723692684610017dcbc98`)
// }


const handleChange = (e) => {
 let copyComments = {...comments}
 copyComments[e.target.name] = e.target.value
 
 let copyUser = {...user}
 copyUser[e.target.name] =e.target.value

 setComments(copyComments)
 setUser(copyUser)
  
}

const commentSection=()=> {
  return commentSect.map((eachComment) => {
    console.log(anime.mal_id);
    console.log(eachComment.id);
    if(eachComment?.id === props.match.params.dynamicId){    
      return (
      <div style={{background:"white", margin:"10px"}}>
        <h3>{eachComment.content.user}</h3>
        <p>{eachComment.content.comment}</p>
      </div>
    )
}
  return    
 })}

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
                
                <input onChange={handleChange} type="text" placeholder="name" name="user" required />
                
                <textarea onChange={handleChange} type="text" name="comment" required/>
                
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
