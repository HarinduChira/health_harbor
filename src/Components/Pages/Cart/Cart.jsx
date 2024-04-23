import React from 'react'
import Header from '../../Navigation/Header'
import Footer from '../../Navigation/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Cart.css'

const Cart = () => {

  const[product, setProduct] = useState([]);

  const [email, setEmail] = useState('');

  useEffect(() => {
    fetchProducts();

  }, []);

  const fetchProducts = () => {
    setEmail(localStorage.getItem('email'));  

    axios.get('http://localhost:8080/api/CusCartList')
    .then(res => {
        console.log(res);
        setProduct(res.data);
    })
    .catch(err => {
        console.log(err);
    })

    
  }

  const removeFromCart = (product_id) => {

    axios.delete(`http://localhost:8080/api/CusCartList/${product_id}`)
    .then(res => {
        console.log(res); 

        if(res.status === 204)
        {
            alert('Product Removed from Cart');
            fetchProducts();
        }
    })
    .catch(err => {
        console.log(err);
        alert('Product Not Removed from Cart');
    })

  }


  let inputDate = new Date();

  const getDateString = () => {

      const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  
      const formattedDate = inputDate.toLocaleDateString('en-GB', options).replace(/\//g, '-');

      return formattedDate;
  }  

  const calculateTotal = () => {
    let total = 0;                                  
    const filteredProducts = product              
      .filter((product) => product.cus_email === email && product.date === getDateString());
  
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
    <div className='main-cart'>

      <Header logStatus={true}/>

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
            .filter((product) => product.cus_email === email && product.date === getDateString() )
            .map((product) => (
              <div className="cartitems-format cartitems-format-main"  key={product.product_id}>
              <img src={product.image_url} alt="" className='carticon-product-icon'/>
              <p className='cart-p'>{product.product_name}</p>
              <p className='cart-p'>Rs. {product.price}</p>
              <button className='cartitems-qunatity'>{product.quantity}</button>
              <p className='cart-p'>Rs. {product.price * product.quantity}</p>
              <button className='cartitems-remove-button' onClick={() => 
                removeFromCart(product.product_id)}>Remove</button>
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
