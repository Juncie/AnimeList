import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TopAnime({props}) {
    const [anime, setAnime] = useState([])
    useEffect(() =>{
        GetTopAnime();
    }, [])
    
    const GetTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(res => res.json());
        setAnime(temp.top);
    } 
    console.log(anime.mal_id)
    
    const showTop = () => {
       return anime.map((eachAnime, i) => {
           console.log(eachAnime.mal_id);
            return (
                <Link to={`/MoreDetails/${eachAnime.mal_id}`} key={i} className='links'>
                <div key={i}>
                   
                        <img src={eachAnime.image_url} className="images"/>
                        
                        <h2>{eachAnime.title}</h2>
                         
                        </div>
                   
                    </Link>
                )
            })
            
        }



 return (
    
        <div className="show-box">
            
        {showTop()}
        </div>
    );
}

export default TopAnime;