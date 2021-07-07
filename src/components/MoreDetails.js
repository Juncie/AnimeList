import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const MoreDetails = (props) => {
    console.log(props)
   console.log('workkk')
    const [anime, setAnime] = useState([])
    const [characters, setCharacters] = useState([])

    useEffect ( () => {
        const res = axios.get(`https://api.jikan.moe/v3/anime/${props.match.params.dynamicId}`).then(res => {
            setAnime(res.data)
            console.log(res)

        const ren = axios.get(`https://api.jikan.moe/v3/anime/${props.match.params.dynamicId}/characters_staff`).then((ren) =>{
            setCharacters(ren.data) 
            console.log(ren.data)})
        })
    },[])
    

       
    
    
    
    return (
        <div className="more-details">
             
            <main className="more-details-info">
                
              <section className="sec-1">
                
                <div className="col-1">
                    <img src={anime.image_url} />
                    
                    <div>
                      <h4>Score: {anime.score}</h4>
                      <h4>Episodes: {anime.episodes}</h4>
                      <h4>Airing: {anime.status}</h4>
                      <h4>Type: {anime.type}</h4>
                    </div>
                
                </div>
                
                <div className="col-2">
                    <h1>{anime.title}</h1>
                    <p style={{textAlign:"justify"}}>{anime.background}</p>
                    <img src={characters.image_url} />    
                <div className="youtube-vid">
                    
                    <iframe src={anime.trailer_url} frameborder="2"></iframe>
                    
                    </div>
                </div>
             
              
              </section>
              
               
              
             </main>
             
          
            
        </div>
       
    );
};

export default MoreDetails;