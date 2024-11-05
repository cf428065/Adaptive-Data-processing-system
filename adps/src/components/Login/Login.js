import React from "react";
import "./Login.css";
function Login() {
  return (
    <div id="loginPage">
      <div id="loginBox">
        <div id="loginForm">
          <div id="formTitle">Sign in </div>
          <div>
            <form>
              <div className="inputBox">
                <label>Email</label>
                <input type="text" name="username" />
              </div>
              <div className="inputBox">
                <label>Password</label>

                <input type="password" name="password" />
              </div>
              <button className="LoginBtn">Login</button>
            </form>
          </div>
        </div>
        <div id="welcome">
          <p>
            Welcome to the Login Page
            
          </p>
          <h6>Don't Have an Account ? </h6>
          <a className="button-18" href="/signup">sign up</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
