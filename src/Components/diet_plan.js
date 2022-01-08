import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../style/diet.css";
import Footer from "./footer";
import NavBar from "./navbar";

class Leaderboard extends React.Component{
    render() {
        return(
            <div>
                <NavBar/>
                
                    
                <Footer/>
            </div>
        );
    }
}

export default Diet;