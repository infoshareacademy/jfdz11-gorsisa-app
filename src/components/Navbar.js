import React from 'react'
import {Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav-wrapper">
        <div className="container">
        <a className="brant-logo">Run-app</a>
        <ul className="right">
        <li><Link to="/">Home</Link></li>
        <li><NavLink to="/CreateRunnp">Create</NavLink></li>
        <li><NavLink to="/RunList.js">RunList</NavLink></li>

        </ul>
        </div>
        </nav>
    )
}
export default Navbar