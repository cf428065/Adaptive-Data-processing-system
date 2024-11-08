import React from 'react'
import confirm from 'react-alert'
function ListOrder({BoxName, BoxTags, Price, img}) {

  function createOrder(e){
  e.preventDefault();
  if (confirm("you want to confirm the order")) {
    
    
  } else {
    
  }
  
}

  return (
    <div>
      <form onSubmit={createOrder}>
      <img src={img}> </img>
      <h1>{BoxName}</h1>
      <p>{BoxTags}</p>
      <p>{Price}</p>
      <input type="submit"> Order </input>
      </form>
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

export default ListOrder
