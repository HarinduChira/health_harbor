import React from 'react'
import Header from '../../Navigation/Header'
import Footer from '../../Navigation/Footer'
import CartItem from './CartItem/CartItem'
import axios from 'axios'
import { useEffect, useState } from 'react'

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

  return (
    <div>
        <Header/>

        <div className="cart">

            <div className="cart-items">
                <table>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>

                    {product
                        .filter(product => product.cus_email === "harinduchira@gmail.com" && product.date === new Date().getDay.toLocaleString() )
                        .map(product => (

                          <tr key={product.product_id}>
                            <CartItem product_name={product.product_name} quantity={product.quantity} price={product.price} />
                          </tr>
                        )
                    
                    )}
                </table>
            </div>  

            
        </div>
        <Footer/>
      
    </div>
  )
}

export default Cart
