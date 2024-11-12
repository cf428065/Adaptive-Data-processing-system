<<<<<<< HEAD
import React from 'react'
import { useState,useEffect } from 'react'
import './ListOffer.css'
import Offer from '../Offer'
import { useHttpClient } from '../../httpClient/HttpClientContext';

function ListOffer() {
  const [offers,setOffers] = useState([]);

    //Context-object
    const httpClient = useHttpClient();

  useEffect (() => {
    const r_id = httpClient.get(`/me`).id;
    httpClient.getwithParam('/reservation', 'restaurant_id', r_id).then(res => {
        setOffers(res);});
  },[]);


  return (
    <div>ListOffers
{offers.length>0 && offers.map(offer=><Offer {...offer} key={offer.id}/>)}


    </div>
  )
}

=======
import React from 'react'
import { useState,useEffect } from 'react'
import './ListOffer.css'
import Offer from '../Offer'
import { useHttpClient } from '../../httpClient/HttpClientContext';

function ListOffer() {
  const [offers,setOffers] = useState([]);

    //Context-object
    const httpClient = useHttpClient();

  useEffect (() => {
    const r_id = httpClient.get(`/me`).id;
    httpClient.getwithParam('/reservation', 'restaurant_id', r_id).then(res => {
        setOffers(res);});
  },[]);


  return (
    <div>ListOffers
{offers.length>0 && offers.map(offer=><Offer {...offer} key={offer.id}/>)}


    </div>
  )
}

>>>>>>> 1f464f5db8a4b29b6bca16e6eab265fa19a42a24
export default ListOffer