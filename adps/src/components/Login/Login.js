import React, { useState } from "react";
import "./Login.css";
import { useHttpClient } from '../../httpClient/HttpClientContext';

function Login() {

 //Context-object
 const httpClient = useHttpClient();
  // Verwende useState, um den Zustand der Eingabewerte zu speichern
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Funktion, die beim Absenden des Formulars aufgerufen wird
  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      email: email,
      password: password
    };
    const data = httpClient.postAuth("/auth/login", clientData).json();
      
    // save auth-token in session storage
    const token = data.authToken;
    sessionStorage.setItem('authToken', token);
  };


  return (
    <div id="loginPage">
      <div id="loginBox">
        <div id="loginForm">
          <div id="formTitle">Sign in</div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <label>Email</label>
                {/* Aktualisiere den Zustand, wenn der Benutzer die Eingabe ändert */}
                <input
                  type="text"
                  name="username"
                  value={email} // Setze den Wert des Eingabefelds auf den Zustand
                  onChange={(e) => setEmail(e.target.value)} // Aktualisiere den Zustand
                />
              </div>
              <div className="inputBox">
                <label>Password</label>
                {/* Gleiches für das Passwortfeld */}
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="LoginBtn" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
        <div id="welcome">
          <p>Welcome to the Login Page</p>
          <h6>Don't Have an Account?</h6>
          <a className="button-18" href="/signup">
            sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;