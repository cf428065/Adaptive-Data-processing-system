import React from 'react'
import './ListOrders.css'
import Order from './Order'
import { useState,useEffect } from 'react'
function ListOrders() {
    const [orders,setOrders] = useState([{ name: 'Order 1',status:'reserved',picture:'',pickuptime:'thursday 16:00', quantity:3 
     
    }, ]);
    useEffect (() => {
        /* fetch('http://localhost:9000/offer',{credentials:'include'}).then(response => {
             response.json().then(offers=>{setOffers(offers);})},[]);
         fetch('http://localhost:9000/profile',{credentials:'include'}).then(response => {
          response.json().then(userInfo=>{
      setUsername(userInfo.username);})
          })
         */},[]);
  return (
    <div>ListOrders
{orders.length>0 && orders.map(order=><Order {...order} key={order.id}/>)}


    </div>
  )
}

export default ListOrders