import React from 'react'
//Order Logic is wrong, look at reservation in Backend
function Order({customerName,status,picture,pickuptime,quantity}) {

  return (
    <div className="order">
        <img src={picture} alt="orderImage" />
      <h2> {customerName} </h2>
      <p> {pickuptime}</p>
      <p> {status}</p>
        <p> {quantity}</p>
    </div>
  )
}

export default Order