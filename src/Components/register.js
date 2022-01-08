import React from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBar from "./navbar";
import Footer from "./footer";
import "../style/register.css";
import { faLock } from "@fortawesome/free-solid-svg-icons";

class Register extends React.Component{
    render() {
        return(
            <div>
                {/* <NavBar/> */}
                <div className="Signup">
				<form onSubmit="">
					<h2>Sign Up</h2>
					<br />
					<hr />
					<div className="form-group">
						<div className="input-group" style={{textAlign:"center"}}>
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-user"></span>
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								name="firstname"
								placeholder="Your Full Name"
								required="required"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group" style={{textAlign:"center"}}>
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-paper-plane"></i>
								</span>
							</div>
							<input
								type="email"
								className="form-control"
								name="email"
								placeholder="Your Email Address"
								required="required"
							/>
						</div>
					</div>
                    <div className="form-group">
						<div className="input-group" style={{textAlign:"center"}}>
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-user"></span>
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								name="firstname"
								placeholder="Your Contact No."
								required="required"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group" style={{textAlign:"center"}}>
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock"></i>
									{/* <FontAwesomeIcon icon={faLock} /> */}
								</span>
							</div>
							<input
								type="password"
								className="form-control"
								name="password"
								placeholder="Password"
								required="required"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group" style={{textAlign:"center"}}>
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock"></i>
									<i className="fa fa-check"></i>
								</span>
							</div>
							<input
								type="password"
								className="form-control"
								name="confirm_password"
								placeholder="Confirm Password"
								required="required"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group" style={{textAlign:"center", fontSize:"1.6rem"}}>
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-user"></i>
								</span>
							</div>
							<input
								type="file"
								className="form-control"
								name="profile pic URL"
								placeholder="Upload Profile Pic"
								accept=".jpg/.png"
								style={{textAlign:"center", display:"inline-block"}}
							/>
						</div>
					</div>


					<br />
					<div className="form-group text-center">
						<label className="form-check-label" />
						<input type="checkbox" required="required" id="myCheckbox" /> I
						accept the <a href="#">Terms of Use</a> &amp;{" "}
						<a href="#">Privacy Policy</a>
					</div>
					<div className="form-group text-center">
						<input
							type="submit"
							value="Register"
							className="btn btn-primary"
						/>
					</div>

					<br />
					<div className="text-center" style={{ marginBottom: "10px" }}>
						Already have an account?&nbsp;<a href={"/login"}>Login here</a>
					</div>
				</form>
			</div>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default Register;




