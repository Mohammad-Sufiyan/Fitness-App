import React from "react";
import reactDom from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./navbar";
import Footer from "./footer";
import "../style/login.css"

class Login extends React.Component{
    render() {
        return(
            <div>
                {/* <NavBar/> */}
                <div className="Login">
                <form onSubmit={this.onSubmit}>
					<h2>Login</h2>
					<br />
					<hr />
					<div className="form-group">
						<div className="input-group" style={{textAlign:"center"}}>
							<div className="input-group-prepend">
								<span className="input-group-text">
									<span className="fa fa-paper-plane"></span>
								</span>
							</div>
							<input
								type="text"
								className="form-control"
								name="username"
								placeholder="Username"
								required="required"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group" style={{textAlign:"center"}}>
							<div className="input-group-prepend">
								<span className="input-group-text">
									<i className="fa fa-lock"></i>
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
					<br />
					<div className="form-group text-center">
						<input type="submit" value="LOGIN" className="btn btn-primary" />
					</div>
					<br />
					<div
						className="text-center"
						style={{ marginBottom: "10px", color: "purple" }}
					>
						Don't have an account?
						<a href={"/register"} style={{ textDecoration: "none" }}>
							Register here
						</a>
					</div>
				</form>
                </div>
                {/* <Footer/> */}
            </div>
        );
    }
}

export default Login;


