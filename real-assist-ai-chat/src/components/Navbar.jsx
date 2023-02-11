import React from 'react'

export default function Navbar(){
    
return (
    <div className="navbar">
        <div className="menu-container">
        <img className="menu"src="src/assets/hamburger-menu-svgrepo-com.svg" alt="menu"/>
        </div>
        <div className="text-container">
        <h1> Real Assist AI</h1>
        <p>This is a private message between you and the Assistant</p>
        </div>
    </div>
)
}