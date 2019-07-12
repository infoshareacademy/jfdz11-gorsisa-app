import React from 'react'
import {Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
       
        <div className="nav">
     
        <ul className="List">
        <li className="element_List"><Link to="/">Home</Link></li>
        <li className="element_List"><NavLink to="/Dashboard">Dashboard</NavLink></li>
        <li className="element_List"><NavLink to="/landing-page">RunList</NavLink></li>
        <li className="element_List"><NavLink to="/project/:id">Project Details</NavLink></li>
        <li className="element_List"><NavLink to="/Form">Form</NavLink></li>
        </ul>
        </div>
        
    )
}
export default Navbar

