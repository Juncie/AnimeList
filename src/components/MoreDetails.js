import React, {useState} from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const MoreDetails = (props) => {
    console.log(props)
   console.log('workkk')
    const [anime, setAnime] = useState([])

    useEffect ( () => {
        console.log('is use effect working?')
        const res = axios.get(`https://api.jikan.moe/v3/anime/${props.match.params.dynamicId}`).then(res => {
            setAnime(res.data)
            console.log(res)
        })
    },[props.match.params.dynamicId]) 
    
    
    
    return (
        <div>
          <h2>{anime.title}</h2>
        </div>
    );
};

export default MoreDetails;