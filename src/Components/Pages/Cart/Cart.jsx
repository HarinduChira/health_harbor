import React from 'react'
import Header from '../../Navigation/Header'
import Footer from '../../Navigation/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Cart.css'

const Cart = () => {

  const[product, setProduct] = useState([]);

  useEffect(() => {

      axios.get('http://localhost:8080/api/CusCartList')
      .then(res => {
          console.log(res);
          setProduct(res.data);
      })
      .catch(err => {
          console.log(err);
      })
  }, []);

  const removeFromCart = (product_id) => {

  }

  const calculateTotal = () => {
    let total = 0;                                  
    const filteredProducts = product              
      .filter((product) => product.cus_email === "harinduchira@gmail.com");
  
    const mappedProducts = filteredProducts.map((product) => {
      const key = product.product_id;              
      return { key, price: product.price, quantity: product.quantity };
    });
  
    mappedProducts.forEach((product) => {           
      total += product.price * product.quantity;    
    });
  
    return total;                                 
  }

  return (
    <div>
      <Header/>

      <div className='cartitems'>
        <div className="cartitems-format-main">
          <p>Product</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />

        {product
            .filter((product) => product.cus_email === "harinduchira@gmail.com")
            .map((product) => (
              <div className="cartitems-format cartitems-format-main"  key={product.product_id}>
              <img src={product.image_url} alt="" className='carticon-product-icon'/>
              <p>{product.product_name}</p>
              <p>Rs. {product.price}</p>
              <button className='cartitems-qunatity'>{product.quantity}</button>
              <p>Rs. {product.price * product.quantity}</p>
              <button className='cartitems-remove-button' onClick={() => removeFromCart(product.product_id)}>Remove</button>
            </div>
          ))
        }

        <hr />

        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals </h1>
            <div>
              <div className="cartitems-total-items">
                <p>Sub Total</p>
                <p>Rs. {calculateTotal()}</p>
              </div>
              <hr />
              <div className="cartitems-total-items">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-items">
                <h3>Total</h3>
                <h3>Rs.{calculateTotal()}</h3>
              </div>  
            </div>

            <button>PROCEED TO CHECKOUT</button>
          </div>
        </div>


      </div>  
      <Footer/>
    </div>
  )
}

export default Cart
