import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HttpClientProvider } from '../httpClient/HttpClientContext';

import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import CreateOffer from '../components/CreateOffer/CreateOffer';  
import ListOffer from '../components/ListOffer/ListOffer';
import ListOrders from '../components/ListOrders/ListOrders';
<<<<<<< HEAD
import ListBoxes from '../components/ListBoxes/ListBoxes';
import NavBar from '../components/NavBar/NavBar';
=======
>>>>>>> 1f464f5db8a4b29b6bca16e6eab265fa19a42a24


function App() {

 
  return (
    <HttpClientProvider>
<<<<<<< HEAD
      
      <BrowserRouter>
      <NavBar />
        <Routes>
            <Route index path="/" element={<Home />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/signup" element={<Signup />} />

            <Route  path="/boxes" element={<ListBoxes />} />
=======
      <BrowserRouter>
        <Routes>
            <Route index path="/home" element={<Home />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/signup" element={<Signup />} />
>>>>>>> 1f464f5db8a4b29b6bca16e6eab265fa19a42a24
            <Route  path="/offers" element={<ListOffer />} />
            <Route  path="/order" element={<ListOrders />} />
            <Route  path="/createoffer" element={<CreateOffer />} />
        </Routes>
      </BrowserRouter>
    </HttpClientProvider>
  );
}

export default App;