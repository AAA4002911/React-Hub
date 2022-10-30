import React from 'react';

export default function Header() {
    return (
        <header>
            <nav>
                <img className="logo" src='./React-icon.svg.png' width="100px" />
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