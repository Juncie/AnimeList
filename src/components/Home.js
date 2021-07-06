import React from 'react';

const Home = () => {
    return (
        <div className='home-page'>
                <div className="wrapper">    
                
                <input type='text' placeholder='Begin your search here...'></input>
                <div id='box' className='TopAnime-box'>Top Anime</div>
                <div id='box'className='Genres-box'>Genres</div>
                <div id='box'className='Manga-box'>Manga</div>
                <div id='box'className='Random-box'>???</div>
                <footer style={{gridArea:"footer", position:'relative', top:'28vh'}} className='foot'>Follow Us:</footer>
                
                </div>
        </div>
    );
};

export default Home;