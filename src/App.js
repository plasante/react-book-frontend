import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/login_logout/Login";
import Logout from "./components/login_logout/Logout";

const App = () => {
    return (
        <Router>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;