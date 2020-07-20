import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = ()=>{
    return(
        <nav>
            <div className="nav-wrapper blue darken-1 nav-bar">
            <span href="/" className="brand-logo">Logo</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/create">Make new announcements</NavLink></li>
                <li><NavLink to="/announcements">announcements</NavLink></li>
            </ul>
            </div>
        </nav>
        
    )
}