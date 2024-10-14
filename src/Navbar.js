import React from "react";
import { NavLink } from "react-router-dom";
import './css/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <NavLink className="nav-button" activeClassName="active-nav-button" to="/">Home</NavLink>&nbsp;
            <NavLink className="nav-button" activeClassName="active-nav-button" to="/login">Login</NavLink>&nbsp;
            <NavLink className="nav-button" activeClassName="active-nav-button" to="/logout">Logout</NavLink>&nbsp;
            <NavLink className="nav-button" activeClassName="active-nav-button" to="/books">Books</NavLink>&nbsp;
            <NavLink className="nav-button" activeClassName="active-nav-button" to="/users">Users</NavLink>
        </nav>
    );
}

export default Navbar;