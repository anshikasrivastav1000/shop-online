import React from 'react'
import { MdDelete } from "react-icons/md";
import "./CartCard.css"
import image1 from "../../assets/image1.jpg"
import { useDispatch } from 'react-redux';
import { RemoveItem } from '../../redux/cartSlice';
function CartCard({name,price,image,id}) {
    let dispatch =useDispatch()
  return (
    <div className='CartCard'>
        <div className="left-cart">
            <img src={image} alt="" />
            <div className="name-price">
                <span>{name}</span>
                  <span>Rs {price}</span>
            </div>
        </div>
        <div className="right-card">
            <button onClick={()=>{
                dispatch(RemoveItem(id))
            }}>Remove <MdDelete /></button>
        </div>
    </div>
  )
}

export default CartCard