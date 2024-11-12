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
  httpClient.postAuth("/auth/login", clientData);
  };return (
    <div id="loginPage">
      <div id="loginBox">
        <div id="loginFormBox">
          <div id="formTitle">Sign in</div>
          <form id="loginForm" onSubmit={handleSubmit}>
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
        <div id="welcome">
          <p>Welcome to the Login Page</p>
          <h6>Don't Have an Account?</h6>
          <a className="button-18" href="/signup">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}  

export default Login;
