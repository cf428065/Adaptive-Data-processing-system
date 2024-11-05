import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import { HttpClient } from '../http-client';

function App() {

  const httpClient = new HttpClient();
  httpClient.init('https://x8ki-letl-twmt.n7.xano.io/api:1wVJCKYF');

  return (
    <BrowserRouter>
      <Routes>
        
          <Route index path="/login" element={<Login />} />
          <Route  path="/signup" element={<Signup />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;