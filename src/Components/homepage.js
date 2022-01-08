import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./navbar";
import Services from "./services";
import Footer from "./footer";

class Homepage extends React.Component{
    render() {
        return(
            <div>
                <NavBar/>
                <Services/>
                <Footer/>
            </div>
        );
    }
}

export default Homepage;


