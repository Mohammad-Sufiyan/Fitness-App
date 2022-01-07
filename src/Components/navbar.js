import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../style/navbar.css";

class NavBar extends React.Component{
    render() {
        return(
            <div>
                <header id="top">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-white fixed-top navbar-bg-onscroll--fade" id="mainNav">
                        <div className="container">
                        <a className="navbar-brand js-scroll-trigger" href="#page-top">G2O Gym</a>  
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="ti-menu text-primary"></span>
                        </button>
                        <div className="navbar-collapse collapse" id="navbarResponsive">
                            <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger active" href="#top">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#price">Price</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </nav>
                    <section className="wt-section hero-large hero mt-md-5">
                        <div className="hero-img bg-overlay" data-overlay="0" style={{backgroundImage: "https://images.unsplash.com/photo-1641381612269-afde1eac2f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}}></div>
                        <div className="container">
                            <div className="row align-items-center text-white">
                                <div className=" col-md-6">
                                    <h1 className="text-uppercase mb-3 display-3 font-weight-bolder aos-init aos-animate" data-aos="fade-right">
                                        Ultimate Fitness
                                    </h1>
                                    <button className="btn btn-lg btn-outline-light py-2 mt-3 px-4 btn-pill aos-init aos-animate" data-aos="fade-left">Our Price</button>
                                </div>
                            </div>
                        </div>
                    </section>

                </header>
            </div>
        );
    }
}

export default NavBar;