import React from 'react';
import './nav.css';

const Nav = () => {
    return(
        <div>
            <div className="navbar">
            <h3 className="navlogo">Event Dashboard</h3>
                <ul>
                    <li className="navitem">Dashboard</li>
                    <li className="navitem">Login</li>
                    <li className="navitem">Sign Up</li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;