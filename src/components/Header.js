import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <Link to='/'>
            <nav style = {{background: `#1DA1F2`, padding: `2em`}}>
                🏠
            </nav>
            </Link>
        </div>
    );
}

export default Header;