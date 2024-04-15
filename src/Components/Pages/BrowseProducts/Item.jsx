import React from 'react'
import './Item.css'
// import { useState } from 'react';

const Item = (props) => {

  // const [view, setView] = useState(false);


  return (
    <div className='item'>
        <img src={props.image_url} alt='' />
        <h3>{props.name}</h3>
        <p>Rs. {props.price}</p> 
        
        <button>Add to Cart</button>

        {/* <div onClick={() => setView(true)}>
          {view &&
          <div class="content">
            <img src={props.image_url} alt={props.name} />
            <h3>{props.name}</h3>
            <p className="description">{props.description}</p>
            <p className="category">{props.category}</p>

            <div className="reviews">
              <h4>Reviews</h4>
              <p>{props.reviews}</p>
            </div>
            <p>Rs. {props.price}</p>
          </div>
          }
           
        </div> */}
    </div>
  )
}

export default Item
