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
          console.log('https://api.jikan.moe/v3/manga/anime/1/characters')
    } 
    
    const showTop = () =>{
       return anime.map((eachAnime, i) => {
            console.log(eachAnime.title);
            return (
                <Link className='links'to={eachAnime.url}>
                <div key={i}>
                   
                        <img src={eachAnime.image_url} className="images"/>
                        
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