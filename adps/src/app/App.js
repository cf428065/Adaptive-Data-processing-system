import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import { HttpClientProvider } from '../httpClient/HttpClientContext';

function App() {

 
  return (
    <HttpClientProvider>
      <BrowserRouter>
        <Routes>

            <Route index path="/login" element={<Login />} />
            <Route  path="/signup" element={<Signup />} />


        </Routes>
      </BrowserRouter>
    </HttpClientProvider>
  );
}

export default App;