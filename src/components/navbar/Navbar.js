import React, { useContext, useEffect, useState } from 'react';
import {NavLink} from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import './Navbar.css';

const Navbar = () => {
    const { token } = useContext(AppContext);
    const [userToken, setUserToken] = useState(token);

    useEffect(() => {
        setUserToken(token);
    }, [token]);

    return (
        <nav>
            <NavLink className="nav-button" activeClassName="active-nav-button" to="/">Home</NavLink>
            {
                userToken ?
                    <NavLink className="nav-button" activeClassName="active-nav-button" to="/logout">Logout</NavLink> :
                <NavLink className="nav-button" activeClassName="active-nav-button" to="/login">Login</NavLink>
            }
            <NavLink className="nav-button" activeClassName="active-nav-button" to="/books">Books</NavLink>
            <NavLink className="nav-button" activeClassName="active-nav-button" to="/users">Users</NavLink>
        </nav>
    );
}

export default Navbar;