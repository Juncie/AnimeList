import React from 'react';

const Home = () => {
    return (
        <div className='home-page'>
                <div className="wrapper">    
                
                <input type='text' placeholder='Begin your search here...' style={{gridArea:'s'}}></input>
                <div id="box" className='topAnime-box' style={{gridArea:'a'}}>Top Anime</div>
                <div id="box" className='genres-box' style={{gridArea:'g'}}>Genres</div>
                <div id="box" className='manga-box' style={{gridArea:'m'}}>Manga</div>
                <div id="box" className='random-box' style={{gridArea:'r'}}>???</div>
                <footer className='foot' style={{gridArea:'ft'}}>Follow Us:</footer>
                
                </div>
        </div>
    );
};

export default Home;



//    console.log('https://api.jikan.moe/v3/manga/anime/1/characters')
//    console.log('https://api.jikan.moe/v3/genre/anime/1/1')