import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../style/navbar.css";

class NavBar extends React.Component{
    render() {
        return(
            <div>
                <nav className="navbar  bg-light navbar-expand-lg fixed-top">
                    <a href={"/"} className="navbar-brand">
                        Coacher
                    </a>
                    <button
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="navbar-item">
                                <a href={"/"} className="nav-link">
                                    Homepage
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a href={"/profile"} className="nav-link">
                                    Profile
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a href={"/register"} className="nav-link">
                                    Subjects
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a href={"/register"} className="nav-link">
                                    Notes
                                </a>
                            </li>
                            <li className="navbar-item" classNameName="highlight">
                                <a href={"/"} className="nav-link">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;