import React from 'react'
import "./Product.css"
import image1 from "../../assets/image1.jpg"
import { useDispatch } from 'react-redux'
import { AddItem } from '../../redux/cartSlice'

function Product({name,image,price,id}) {
    let dispatch = useDispatch()
  return (
    <div className="product">
        <img src={image}/>
        <div className="product-details">
        <span>{name}</span>
        <span>{price}</span>
        <button onClick={()=>{
            dispatch(AddItem({name:name,image:image,price:price,id:id}))
        }}>Add + </button>
        </div>
    </div>
  )
}

export default Product