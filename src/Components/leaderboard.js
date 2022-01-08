import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../style/leaderboard.css";
import Footer from "./footer";
import NavBar from "./navbar";

class Leaderboard extends React.Component{
    render() {
        return(
            <div>
                <NavBar/>
                <div className="leaderboard">
                    <h1>
                        <svg className="ico-cup">
                        <a href="#cup"></a>
                        </svg>
                        Most active Players
                    </h1>
                    <ol>
                        <li>
                        <mark>Jerry Wood</mark>
                        <small>315</small>
                        </li>
                        <li>
                        <mark>Brandon Barnes</mark>
                        <small>301</small>
                        </li>
                        <li>
                        <mark>Raymond Knight</mark>
                        <small>292</small>
                        </li>
                        <li>
                        <mark>Trevor McCormick</mark>
                        <small>245</small>
                        </li>
                        <li>
                        <mark>Andrew Fox</mark>
                        <small>203</small>
                        </li>
                    </ol>
                    </div>
                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    <Footer/>
            </div>
        );
    }
}

export default Leaderboard;