import React, { useState } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const [quantity, setQuantity] = useState(1);

  const cus_email = localStorage.getItem('email');

  const item = {
    cus_email: cus_email,
    productId: props.product_id,
    product_name: props.name,
    price: props.price,
    image_url: props.image_url,
    quantity: quantity,
    date: new Date().toLocaleDateString('en-GB').replace(/\//g, '-'),
    status: "Cart"
  };

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/CusCartList/addCusCartItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error("An error occurred");
      }

      const data = await response.json();
      console.log("Item Added To the Cart:", data);

      alert("Added to Cart Successfully!");
    }
    catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const handleChangeQuantity = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  return (
    <div className='item'>
      <div className="item-data">
        <Link to={`/Browse Products/${props.name}`} className='item-link'>
          <img src={props.image_url} alt='' />
          <h3>{props.name}</h3>
          <p>Rs. {props.price}</p>
        </Link>
      </div>
      <form action="" className='addcart'>
        <div className="quantity">
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            min="1"
            max="20"
            onChange={handleChangeQuantity}
          />
        </div>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </form>
    </div>
  )
}

export default Item;
