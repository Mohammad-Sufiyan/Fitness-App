import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";

class Discuss extends React.Component{
    render() {
        return(
            <div>
                <NavBar/>

                <Footer/>
            </div>
        );
    }
}

export default Discuss;




