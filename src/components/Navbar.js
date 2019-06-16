import React from 'react'
import {Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
       
        <div className="nav">
     
        <ul className="List">
        <li className="element_List"><Link to="/">Home</Link></li>
        <li className="element_List"><NavLink to="/example">Create</NavLink></li>
        <li className="element_List"><NavLink to="/landing-page">RunList</NavLink></li>

        </ul>
        </div>
        
    )
}
export default Navbar