import React, { useState } from 'react'
import "./Cart.css"
import CartCard from '../../components/cartCard/CartCard'
import { useSelector } from 'react-redux'
import ec from "../../assets/emptycart.png"

function Cart() {
    let items = useSelector(state=>state)
 let total =items.cart.reduce((a,b)=>a+b.price,0)
  return (
    <div className='Cart'>
        {items.cart.length<=0?
       <div className='empty-cart'>
        <img src={ec} alt="" />
        <h1>Empty Cart</h1>
       </div>
        : <div className="cartCart-section">
            {items.cart.map((items)=>(
                <CartCard name ={items.name} price={items.price} image={items.image} id ={items.id}/>
            ))}
              <div className="price-section">
            <span>Total products : {items.cart.length}</span>
            <span>Total Price : {total}</span>
        </div>
        </div>
      
}
    </div>
  )
}

export default Cart