import React from "react";
import { useState } from "react";
import "./Signup.css";
function Signup() {
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmpassword,setConfirmPassword] = useState("");
    console.log(confirmpassword);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="container">
        <div id="welcomeSection">
          <h1>Welcome to our site!</h1>
          <p>   Already have an account? <a href="/login">Login</a>
          </p>
        </div>
       
<form id="formSection">
<div id="formTitle">Registration form </div>
<div id="emailInput">
  <label for="email">Email</label><br/>
  <input type="email" id="email" name="email" placeholder="Email..."  value={email} onChange={e=>setEmail(e.target.value)} />
</div>
<div id="passwordInput"><label for="password">Password</label><br/>
  <input type="Password" id="password" name="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
</div>
<div id="confirmpassowrdInput"><label for="confirmPassword">Confirm Password</label><br/>
  <input type="password" id="confirmPassword" name="confirmPassword" placeholder="confirm Password" value={confirmpassword} onChange={e=>setConfirmPassword(e.target.value)}/>
</div>
<div id="submitInput">
  <button type="submit" id="submit" className="button-34">Register</button>
</div>
</form>

       
      </div>
    </div>
  );
}

export default Signup;
