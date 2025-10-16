import React from 'react'
import Nav from '../../components/nav/Nav'
import bg from "../../assets/bg0.gif"
import "./Home.css"
import { category } from '../../Category'
import Product from '../../components/Product/Product'
import { dummydata } from '../../dummydata'
import { useState } from 'react'
function Home() {
    let[cate,setCate]=useState(dummydata)
    function filterProducts(category){
        const updatedata = dummydata.filter((item)=>(item.category===category))
        setCate(updatedata)
}
  return (
    <div className='home'>
       
        <div className="hero-bg">
            <img src={bg} alt="" />

        </div>
        <div className="category-section">
             {category.slice(0,5).map((item)=>(
            <div className="category-card" onClick={()=>{
                filterProducts(item.name)
            }}>
                <img src={item.Image}/>
                <span>{item.name}</span>
            </div>
        ))}
        </div>
       <h1>Trending products</h1>
       <div className="product-section">
        {cate.slice(0,8).map((item)=>(<Product name={item.name} price={item.price} image={item.image} id={item.id}/>
    ))}
       </div>
    </div>
  )
}

export default Home