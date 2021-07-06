import React from 'react';

const Home = () => {
    return (
        <div className='home-page'>
                <div className="wrapper">    
                
                <input type='text' placeholder='Begin your search here...'></input>
                <div id="box" className='topAnime-box'>Top Anime</div>
                <div id="box" className='genres-box'>Genres</div>
                <div id="box" className='manga-box'>Manga</div>
                <div id="box" className='random-box'>???</div>
                <footer id="box" className='foot'>Follow Us:</footer>
                
                </div>
        </div>
    );
};

export default Home;

const dailyFun = () => {
    let mornings=['breakfast', 'work', 'sleep', 'cry']
    let lies = []
     for (let i = 0; i< mornings.length; i++) {
     if(mornings[i].includes('s')){
        lies.push(mornings[i])
     }
     return lies
     }
     }
    
   dailyFun()





//    console.log('https://api.jikan.moe/v3/manga/anime/1/characters')
//    console.log('https://api.jikan.moe/v3/genre/anime/1/1')
