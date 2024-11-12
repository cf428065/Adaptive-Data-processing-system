<<<<<<< HEAD
import React from "react";
import { useHttpClient } from '../httpClient/HttpClientContext';

//Order Logic is wrong, look at reservation in Backend
function Offer({ id, name, status, type, picture, quantity, price }) {
     // Function, to Change status to Picked-up
     const httpClient = useHttpClient();

     const orderPickedUp = () => {
      status = "picked-up";
      const data ={
        reservation_id: id,
      };
      httpClient.post('/reservation/pick-up', data)
     };
     
  return (
    <div className="offer">
      <img src={picture} alt="offerImage" />
      <h2> {name} </h2>
      <p> {type}</p>
      <p> {quantity}</p>
      <p>{price}</p>
      <button onClick={orderPickedUp}>
      </button>
    </div>
  );
}

export default Offer;
=======
import React from "react";
import { useHttpClient } from '../../httpClient/HttpClientContext';

//Order Logic is wrong, look at reservation in Backend
function Offer({ id, name, status, type, picture, quantity, price }) {
     // Function, to Change status to Picked-up
     const httpClient = useHttpClient();

     const orderPickedUp = () => {
      status = "picked-up";
      const data ={
        reservation_id: id,
      };
      httpClient.post('/reservation/pick-up', data)
     };
     
  return (
    <div className="offer">
      <img src={picture} alt="offerImage" />
      <h2> {name} </h2>
      <p> {type}</p>
      <p> {quantity}</p>
      <p>{price}</p>
      <button onClick={orderPickedUp}>
      </button>
    </div>
  );
}

export default Offer;
>>>>>>> 1f464f5db8a4b29b6bca16e6eab265fa19a42a24
