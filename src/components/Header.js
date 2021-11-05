import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            {/* <h3>Coronavirus sentiment Analysis</h3> */}
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/Page2">Page2</Link></li>
            </ul>
        </header>
    )
}

export default Header
