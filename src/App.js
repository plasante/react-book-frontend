import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/login_logout/Login";
import Logout from "./components/login_logout/Logout";
import Book from "./components/books/Book";
import Navbar from "./Navbar";
import User from "./components/users/User";

const App = () => {
    return (
        <Router>
            <div className="container">
                <div>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/logout" element={<Logout/>}/>
                        <Route path="/books" element={<Book/>}/>
                        <Route path="/users" element={<User/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    )
}

export default App;