import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";
import "../style/profile.css"

class Profile extends React.Component{
    render() {
        return(
            <div>
                <NavBar/>
                        {/*left col*/}
                        <div className="text-center">
                            <img
                            src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png"
                            className="avatar img-circle img-thumbnail"
                            alt="avatar"
                            />
                            <h6>Upload a different photo...</h6>
                            <input type="file" className="text-center center-block file-upload" />
                        <br />
                        {/*/col-3*/}
                        
                            <div className="tab-pane active" id="home">
                            <hr />
                            <form
                                className="form"
                                action="##"
                                method="post"
                                id="registrationForm"
                            >
                                <div className="form-group">
                                <div className="text-center">
                                    <label htmlFor="full_name">
                                    <h4>Your Full name</h4>
                                    </label>
                                    <br/>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="first_name"
                                    id="first_name"
                                    placeholder="first name"
                                    title="enter your first name if any."
                                    style={{marginLeft: "auto", marginRight:"auto"}}
                                    />
                                </div>
                                </div>
                                <div className="form-group">
                                <div className="text-center">
                                    <label htmlFor="mobile">
                                    <h4>Your Mobile No.</h4>
                                    </label>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="mobile"
                                    id="mobile"
                                    placeholder="Mobile number"
                                    title="enter your mobile number if any."
                                    style={{marginLeft: "auto", marginRight:"auto"}}
                                    />
                                </div>
                                </div>
                                <div className="form-group">
                                <div className="text-center">
                                    <label htmlFor="email">
                                    <h4>Your Email</h4>
                                    </label>
                                    <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    placeholder="you@email.com"
                                    title="enter your email."
                                    style={{marginLeft: "auto", marginRight:"auto"}}
                                    />
                                </div>
                                </div>
                                <div className="form-group">
                                <div className="text-center">
                                    <label htmlFor="password">
                                    <h4>Your Password</h4>
                                    </label>
                                    <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    id="password"
                                    placeholder="password"
                                    title="enter your password."
                                    style={{marginLeft: "auto", marginRight:"auto"}}
                                    />
                                </div>
                                </div>
                                <div className="form-group">
                                <div className="col-xs-12">
                                    <br />
                                    <button className="btn btn-lg btn-success" type="submit">
                                    <i className="glyphicon glyphicon-ok-sign" /> Save
                                    </button>&nbsp;&nbsp;
                                    <button className="btn btn-lg" type="reset">
                                    <i className="glyphicon glyphicon-repeat" /> Reset
                                    </button>
                                </div>
                                </div>
                            </form>
                            <hr />
                        {/*/tab-content*/}
                    </div>

                {/* <Footer/> */}
            </div>
            </div>
        );
    }
}

export default Profile;




