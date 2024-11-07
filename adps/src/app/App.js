import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HttpClientProvider } from '../httpClient/HttpClientContext';

import Home from '../components/Home/Home';
import Login from '../components/Login/Login';
import Signup from '../components/Signup/Signup';
import CreateOffer from '../components/CreateOffer/CreateOffer';  
import ListOffers from '../components/ListOffers/ListOffers';
import ListOrders from '../components/ListOrders/ListOrders';


function App() {

 
  return (
    <HttpClientProvider>
      <BrowserRouter>
        <Routes>
            <Route index path="/home" element={<Home />} />
            <Route  path="/login" element={<Login />} />
            <Route  path="/signup" element={<Signup />} />
            <Route  path="/offers" element={<ListOffers />} />
            <Route  path="/order" element={<ListOrders />} />
            <Route  path="/createoffer" element={<CreateOffer />} />
        </Routes>
      </BrowserRouter>
    </HttpClientProvider>
  );
}

export default App;