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
                <footer class="bg-dark py-5">
                    <div class="container">
                        <div class="row">
                        <div class="col-md-8 text-center text-md-left mb-3 mb-md-0">
                            <small class="text-white"><a class="text-white" href="https://webthemez.com/free-bootstrap-templates/">Made with&nbsp; <FontAwesomeIcon icon={faHeart} /></a>&nbsp; by Swapnil Jha, Jasir Khan and Sufiyan. <br/>© All Rights Reserved</small>
                        </div>

                        <div class="col-md-14">
                            <ul class="list-inline text-center text-md-right mb-0">
                            <li class="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
                                <a class="text-white" target="_blank" href="https://www.facebook.com/Maxi">
                                {/* <i class="fa fa-facebook"></i> */}
                                <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li class="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
                                <a class="text-white" target="_blank" href="https://www.instagram.com/Maxi">
                                {/* <i class="fa fa-instagram"></i> */}
                                <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li class="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
                                <a class="text-white" target="_blank" href="https://twitter.com/Maxi">
                                {/* <i class="fa fa-twitter"></i> */}
                                <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li class="list-inline-item mx-2" data-toggle="tooltip" data-placement="top" title="" data-original-title="Dribbble">
                                <a class="text-white" target="_blank" href="https://dribbble.com/Maxi">
                                {/* <i class="fa fa-dribbble"></i> */}
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