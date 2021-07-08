import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
let [anime, setAnime]= useState([])
    const GetTopAnime = async () => {
        const temp = await fetch(
          `https://api.jikan.moe/v3/top/anime/by`
        ).then((res) => res.json());
        setAnime(temp.top);
      };
    
    
    return (
    <div>

    </div>
        

        );
};

export default Home;



