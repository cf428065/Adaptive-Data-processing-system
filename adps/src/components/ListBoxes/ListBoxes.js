import React from 'react';
import { useState,useEffect } from 'react';
<<<<<<< HEAD

import Box from '../Box';
import { useHttpClient } from '../../httpClient/HttpClientContext'

function ListBoxes() { 
=======
import confirm from 'react-alert';
import Box from '../Box';
import { useHttpClient } from '../../httpClient/HttpClientContext';

function ListBoxes({BoxName, BoxTags, Price, img}) { //why do u use here these kind of initialization?
>>>>>>> 1f464f5db8a4b29b6bca16e6eab265fa19a42a24
  
  const httpClient = useHttpClient();
  const [boxes,setBoxes] = useState([]);
  const [featuredBoxes,setfeaturedBoxes] = useState([]);

  useEffect (() => {
    httpClient.get("/box").then(res => {
      setBoxes(res);});
    httpClient.get("/featured-box").then(res => {
      setfeaturedBoxes(res);});
  },[]);
  

  function createOrder(e){
  e.preventDefault();
<<<<<<< HEAD
  if (alert("you want to confirm the order")) {
=======
  if (confirm("you want to confirm the order")) {
>>>>>>> 1f464f5db8a4b29b6bca16e6eab265fa19a42a24
    const data = {
      //TO-DO fill with correct values when page is finished
      box_id: 0,
      number_of_boxes: 0,
      pickup_time: 0,
      client_id: 0
    }
    const reservation = httpClient.post('/reservation', data);
    
<<<<<<< HEAD
  } 
=======
  } else {
    
  }
>>>>>>> 1f464f5db8a4b29b6bca16e6eab265fa19a42a24
  
}

  return (
<<<<<<< HEAD
    
    <div>
    {boxes.length>0 && boxes.map(box=><Box {...box} key={box.id}/>)}

=======
    <div>
      <form onSubmit={createOrder}>
      <img src={img}> </img>
      <h1>{BoxName}</h1>
      <p>{BoxTags}</p>
      <p>{Price}</p>
      <input type="submit"> Order </input>
      </form>
>>>>>>> 1f464f5db8a4b29b6bca16e6eab265fa19a42a24
    </div>

  )
}

/*
"name": "string",
  "tags": [
    "string"
  ],
  "price": 0,
  "box_image": {
    "access": "public",
    "path": "string",
    "name": "string",
    "type": "string",
    "size": 0,
    "mime": "string",
    "meta": {}

*/ 

export default ListBoxes
