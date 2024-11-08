import React from "react";
import { useState } from "react";
import { useHttpClient } from '../../httpClient/HttpClientContext';

import "./CreateOffer.css";
function CreateOffer() {
  
    //Context-object
    const httpClient = useHttpClient();

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [boxType, setBoxType] = useState([]);
    //const [picture, setPicture] = useState([]);
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
async function createOffer(e) {
    e.preventDefault();
    const id = httpClient.get("/auth/me").json().id;
    const data = {
      restaurant_id: id,
      name: name,
      tags: boxType,
      available_count: quantity,
      price: price
    };
    httpClient.post("/box", data);

}


  return (
    <div>
      CreateOffer
      <form onSubmit={createOffer} method="post" enctype="multipart/form-data">
        <input type="hidden" value={id}  />
        <div className="form-group">
          <label> Box Name :</label>
          <input type="text" placeholder="boxName"  onChange={e => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label> Box food Type :</label>
          <select name="boxType" value={boxType}>
            <option>vegetarian</option>
            <option>vegan</option>
            <option>non-vegan</option>
            <option>non-vegetarian</option>
          </select>
        </div>
        <div className="form-group">
          <label> Box Quantity :</label>
          <input type="number" placeholder="boxQuantity" value={quantity}  onChange={e => setQuantity(e.target.value)} />
        </div>
      {/* 
      <div className="form-group">
        <label> Box Picture :</label>
        <input type="file" placeholder="boxPicture" value={picture} onChange={e => setPicture(e.target.value)} />
      </div>
      */}

        <div className="form-group">
          <label> Box Price :</label>
          <input type="number" placeholder="boxQuantity" value={price}  onChange={e => setPrice(e.target.value)}  />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default CreateOffer;
