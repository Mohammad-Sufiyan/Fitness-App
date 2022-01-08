import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "../style/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component{
    render() {
        return(
            <div>
                <footer className="bg-dark py-5">
                    <div className="container">
                        <div className="row">
                        <div className="col-md-8 text-center text-md-left mb-3 mb-md-0">
                            <small className="text-white"><a className="text-white" href="https://webthemez.com/free-bootstrap-templates/">Made with&nbsp; <FontAwesomeIcon icon={faHeart} /></a>&nbsp; by Swapnil Jha, Jasir Khan and Sufiyan. <br/>© All Rights Reserved</small>
                        </div>

                        <div className="col-md-14">
                            <ul className="list-inline text-center text-md-right mb-0">
                            <li className="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
                                <a className="text-white" target="_blank" href="https://www.facebook.com/Maxi">
                                {/* <i className="fa fa-facebook"></i> */}
                                <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li className="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
                                <a className="text-white" target="_blank" href="https://www.instagram.com/Maxi">
                                {/* <i className="fa fa-instagram"></i> */}
                                <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li className="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
                                <a className="text-white" target="_blank" href="https://twitter.com/Maxi">
                                {/* <i className="fa fa-twitter"></i> */}
                                <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li className="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Dribbble">
                                <a className="text-white" target="_blank" href="https://dribbble.com/Maxi">
                                {/* <i className="fa fa-dribbble"></i> */}
                                <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    <br/>
                </footer>
            </div>
        );
    }
}

export default Footer;