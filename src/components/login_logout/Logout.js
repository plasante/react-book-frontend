import React, {useContext, useEffect} from "react";
import { AppContext } from "../../context/AppContext";

const Logout = () => {

    const { token, dispatch } = useContext(AppContext);

    useEffect(() => {
        dispatch({ type: 'SET_TOKEN', payload: '' });
        localStorage.removeItem('token');
    }, [token, dispatch]);

    return (
        <>
            <h2>You've been logged out.</h2>
        </>
    )
}

export default Logout;