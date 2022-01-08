import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirFreshener, faWifi, faShower } from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../style/services.css";

class Services extends React.Component{
    render() {
        return(
            <div>
                <section className="wt-section hero-large hero mt-md-5">
                        <div className="hero-img bg-overlay" style={{backgroundImage: "https://images.unsplash.com/photo-1641381612269-afde1eac2f96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}}></div>
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
                <section className="wt-section bg-light" id="services">
                    <div className="container"> 
                        <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4">
                        <div className="col-md-8 text-center w-md-50 mx-auto mb-0 ">
                            <h2 className="mb-md-2">Our Services</h2>
                            <p className="lead text-muted">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                        </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <div className="card mb-md-0 mb-3 border-1 rounded-md overflow-hidden b-hover aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="300">
                                    <a href="#"><img className="card-img-top" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="card image" /></a>
                                    <div className="card-body py-4">
                                        <strong href="#" className="mb-2 d-block">Aerobic</strong>
                                        <h5 className="mb-4 text-primary">World class coaching</h5>
                                        <div className="mb-4">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-md-0 mb-3 border-1 rounded-md overflow-hidden b-hover aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="500">
                                    <a href="#"><img className="card-img-top" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="card image" /></a>
                                    <div className="card-body py-4">
                                        <strong className="mb-2 d-block">Body Building</strong>
                                        <h5 className="mb-4 text-primary">Best body building techniques</h5>
                                        <div className="mb-4">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-md-0 mb-3 border-1 rounded-md overflow-hidden b-hover aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="800">
                                    <a href="#"><img className="card-img-top" src="https://images.unsplash.com/photo-1623200216581-969d9479cf7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fHdvcmtvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="card image" /></a>
                                    <div className="card-body py-4">
                                        <strong href="#" className="mb-2 d-block">Yoga</strong>
                                        <h5 className="mb-4 text-primary">In-house expert trainer</h5>
                                        <div className="mb-4">
                                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                                        </div>
                                    </div> 
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>
                <section className="wt-section bg-primary">
                    <div className="container">
                    <div className="row justify-content-md-center text-center pb-lg-4 mb-lg-5 mb-4">
                    <div className="col-md-8 text-center w-md-50 mx-auto mb-0 ">
                        <h2 className="mb-md-2">Amenities</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority</p>
                    </div>
                    </div>
                    <div className="row">  
                        <div className="col-md-4">
                            <div className="bg-white p-5 mb-4 text-center rounded-md overflow-hidden b-hover aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="300">
                                    {/* <i className="fa fa-shower"></i>  */}
                                    <FontAwesomeIcon icon={faShower} size="2x"/>
                                    <h6 className="my-2">Steam Bath</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</p> 
                            </div>
                        </div>
                                <div className="col-md-4">
                            <div className="bg-white p-5 mb-4 text-center rounded-md overflow-hidden b-hover aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="500">
                                {/* <i class="fa fa-wifi"></i>  */}
                                <FontAwesomeIcon icon={faWifi} size="2x"/>
                                    <h6 className="my-2">Wi-Fi</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</p> 
                            </div>
                        </div>
                        
                        <div className="col-md-4">
                            <div className="bg-white p-5 mb-4 text-center rounded-md overflow-hidden b-hover aos-init aos-animate" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="800">
                                    <FontAwesomeIcon icon={faAirFreshener} size="2x"/>
                                    {/* <i className="ti-panel display-4 d-block text-primary mb-4"></i>  */}
                                    <h6 className="my-2">Air Conditioned</h6>
                                    <p className="text-muted">Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod</p> 
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
                <br/><br/>
                <div className="card bg-primary border-0 rounded-0 p-5">
                    <div className="container">
                        <div className="row justify-content-between align-items-center text-center text-md-left">
                            <div className="col-md-8">
                                <h5 className="mb-1 d-inline-block border-right border-sm-right-0 pr-md-4 mr-md-4">OFFER</h5>
                                <p className="mb-0 d-inline-block">50% off on Annual subscription.. grab the deal before it go!</p>
                            </div>
                            <div className="mt-3">
                                <a href="#" className="btn btn-pill btn-outline-dark">Subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;