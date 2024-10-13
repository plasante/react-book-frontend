import React, {useState, useEffect, useContext} from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { Button, TextField } from '@mui/material';
import fetchLoginToken from "../apis/FetchLoginToken"

const Login = () => {

    const { token, dispatch } = useContext(AppContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: ''});
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        const isLoggedIn = !!token;
        if (isLoggedIn) {
            navigate('/');
        } else {
            navigate('/login');
        }
    }, [token, navigate]) // The empty dependency array ensures this effect runs only once on mount

    const validateEmail = () => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const validatePassword = () => {
        return password.length >= 6 && password.length <= 15;
    };

    const handleLogin = async () => {
        // Reset previous errors
        setErrors({email: '', password: ''});

        if (!validateEmail()) {
            setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email format' }));
            return;
        }

        if (!validatePassword()) {
            setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be between 6 and 15 characters' }));
            return;
        }

        fetchLoginToken('/auth/token', {email, password})
            .then((response) => {
                const token = response.data.token;
                setLoginError('');
                dispatch({
                    type: 'SET_TOKEN',
                    payload: token,
                });
                localStorage.setItem('token', token);
                navigate('/');
            })
            .catch((error) => {
                console.error('Error getting token: ', error);
                setLoginError(error.message);
            });

    }

    return (
        <>
            <h3>Login Page</h3>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
            />
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label="Password"
                onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password}
            />
            <Button variant="contained" color={"primary"} fullwidth onClick={handleLogin}>
                Login
            </Button>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
        </>
    )
}

export default Login;