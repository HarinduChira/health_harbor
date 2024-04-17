import React from 'react'
import './Item.css'
// import { useState } from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {


  return (
    <div className='item'>
        <div className="item-data">
          <Link to={`/Browse Products/${props.name}`}>
          <img src={props.image_url} alt='' />
          <h3>{props.name}</h3>
          <p>Rs. {props.price}</p>
          </Link> 
        </div>
        <form action="" className='addcart'>
          <div className="quantity">
            <label>Quantity</label>
            <input type="number" defaultValue={1} min="1" max="20"/>
          </div>
          <button >Add to Cart</button>
        </form>
        
        

    </div>
  )
}

export default Item
