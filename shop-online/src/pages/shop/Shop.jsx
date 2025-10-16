import React from 'react'
import {useState} from 'react'
import "./Shop.css"
import { category } from '../../Category'
import { dummydata } from '../../dummydata'
import Product from '../../components/Product/Product'
function Shop() {
    let[cate,setCate]= useState(dummydata)
        function filterProducts(category){
            if(category==="All"){
                setCate(dummydata)
            }else{
             const updatedata = dummydata.filter((item)=>(item.category===category))
            setCate(updatedata)
            }
           
    }
  return (
    <div className="shop">
            <div className="category-section">
                     {category.map((item)=>(
                    <div className="category-card" onClick={()=>{
                        filterProducts(item.name)
                    }}>
                        <img src={item.Image}/>
                        <span>{item.name}</span>
                    </div>
                ))}
                </div>
                 <div className="product-section">
        {cate.map((item)=>(<Product name={item.name} price={item.price} image={item.image} id={item.id}/>
    ))}
       </div>
    </div>
  )
}

export default Shop