import React from 'react'
import {Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
       
        <div className="nav">
     
        <ul className="right">
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/example">Create</NavLink></li>
        <li><NavLink to="/landing-page">RunList</NavLink></li>

        </ul>
        </div>
        
    )
}
export default Navbar