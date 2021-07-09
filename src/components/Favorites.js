import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


function Favorites(props) {
const [favorites, setFavorites] = useState([])
const [anime, setAnime] = useState([])

    useEffect(() => {
        axios
        .get(`https://ironrest.herokuapp.com/findAll/AniToonsFavorites?user=${localStorage.getItem("user")}`)
        .then((rex) => {
            //console.log(rex);
          setFavorites(rex.data);
        });

    //     axios.get(`https://api.jikan.moe/v3/anime/${props.match.params.dynamicId}`).then((res) => {
    //   setAnime(res.data);
    // });
    }, [])



        const showFavorites = () => {
            return favorites.map((eachAnime, i) => {
              console.log(eachAnime);
              return (
                <Link to={`/MoreDetails/${eachAnime.id}`} key={i} className="links">
                    <div className="card">
                    
                    <div className="card-image" style={{background:`url(${eachAnime?.anime?.image_url})`,
                    backgroundSize:" cover"
                  }}>
                      
                    </div>
                    
                      <h4>{eachAnime.content?.comment}</h4>
                  </div>
                </Link>
              );
            });
          };

    return (
        <div className='container'>
            FAVORITES IS WORKING
            <button onClick={()=> {
              localStorage.removeItem('user');props.history.push('/'); window.location.reload()}}>Logout</button>
            
        </div>
    );
}

export default Favorites;