import React from 'react'
import { useState,useEffect } from 'react'
import './ListOffer.css'
import Offer from '../Offer'
import { useHttpClient } from '../../httpClient/HttpClientContext';

function ListOffer() {
  const [offers,setOffers] = useState([]);
  const [email,setEmail] = useState("");

    //Context-object
    const httpClient = useHttpClient();

  useEffect (() => {
     /* fetch('http://localhost:9000/offer',{credentials:'include'}).then(response => {
          response.json().then(offers=>{setOffers(offers);})},[]);
      fetch('http://localhost:9000/profile',{credentials:'include'}).then(response => {
       response.json().then(userInfo=>{
   setUsername(userInfo.username);})
       })
      */
     //TO Do Save offers
    const response = httpClient.get('/box');
    //offers= ;
  },[]);
  return (
    <div>ListOffers
{offers.length>0 && offers.map(offer=><Offer {...offer} key={offer.id}/>)}


    </div>
  )
}

export default ListOffer