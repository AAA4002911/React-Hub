import React from 'react';
import logo from './../React-icon.svg.png';

export default function Header() {
    return (
        <header>
            <nav>
                <img className="logo" src={logo} width="100px" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <h1>What I want to build with React</h1>
        </header>
    )
}