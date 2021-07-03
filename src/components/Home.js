import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {

const [anime, setAnime] = useState([])


const GetTopAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(res => res.json());
        setAnime(temp.top.slice(0, 5));
} 


useEffect(() =>{
    GetTopAnime();
}, [])

console.log(anime)

 return (

        <div>
            Hello
        </div>
    );
}

export default Home;