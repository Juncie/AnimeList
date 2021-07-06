import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TopAnime() {

const [anime, setAnime] = useState([])
useEffect(() =>{
    GetTopAnime();
    console.log('this is working')
}, [])

const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(res => res.json());
        setAnime(temp.top);
    } 
    
    const showTop = () =>{
       return anime.map((eachAnime, i) => {
            console.log(eachAnime.title);
            return (
                <Link to={eachAnime.url}>
                <div key={i}>
                   
                        <img src={eachAnime.image_url} />
                        <h2>{eachAnime.title}</h2>
                         
                        </div>
                   
                    </Link>
                )
            })
            
        }
        console.log(anime)



 return (
    
        <div className="show-box">
            
        {showTop()}
        </div>
    );
}

export default TopAnime;