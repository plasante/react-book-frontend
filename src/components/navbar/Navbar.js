import React, {useContext, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {AppContext} from "../../context/AppContext";
import './Navbar.css';

const Navbar = () => {
    const {token} = useContext(AppContext);
    const [isLoggedIn, setIsLoggedIn] = useState(token);

    useEffect(() => {
        setIsLoggedIn(token);
    }, [token]);

    return (
        <nav>
            <NavLink className="nav-button" activeClassName="active-nav-button" to="/">Home</NavLink>
            {
                isLoggedIn ?
                    <>
                        <NavLink className="nav-button" activeClassName="active-nav-button"
                                 to="/logout">Logout</NavLink>
                    </>
                    :
                    <>
                        <NavLink className="nav-button" activeClassName="active-nav-button" to="/login">Login</NavLink>
                        <NavLink className="nav-button" activeClassName="active-nav-button"
                                 to="/register">Register</NavLink>
                    </>
            }
            <NavLink className="nav-button" activeClassName="active-nav-button" to="/books">Books</NavLink>
            <NavLink className="nav-button" activeClassName="active-nav-button" to="/users">Users</NavLink>
        </nav>
    );
}

export default Navbar;