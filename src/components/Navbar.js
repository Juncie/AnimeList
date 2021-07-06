import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav-bar">
            <nav>
               <section className="logo">
                   <h1>Ani<span className='Toons'>Toons</span></h1>
                   <h5>Everything you never knew you wanted</h5>
               </section>
               
                <section className="options">
                    <Link to='/'> <h3> Home </h3> </Link>
                    <Link to='/TopAnime/'> <h3> Top Anime </h3> </Link>
                    <Link to='/Manga/'> <h3> Manga </h3> </Link>
                    <input type='text' placeholder='Explore'></input>
                </section>
            </nav>
        </div>
    );
};

export default Navbar;