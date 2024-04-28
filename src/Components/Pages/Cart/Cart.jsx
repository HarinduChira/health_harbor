import React from 'react'
import Header from '../../Navigation/Header'
import Footer from '../../Navigation/Footer'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Cart.css'

const Cart = () => {

  const[product, setProduct] = useState([]);

  const [email, setEmail] = useState('');

  const [detailStatus, setDetailStatus] = useState(false);

  useEffect(() => {
    setEmail(localStorage.getItem('email'));
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:8080/api/CusCartList')
      .then(res => {
        console.log(res);
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }


  const removeFromCart = (product_Id) => {

    const productId = parseInt(product_Id);

    axios.delete('http://localhost:8080/api/CusCartList/'+ productId)
      .then(res => {
        console.log(res);
        if (res.status === 204) { 
          alert('Product removed from cart');
          // Update the products state to remove the deleted item
          setProduct(prevProducts => prevProducts.filter(product => product.productId !== productId));

          
        }
      })
      .catch(err => {
        console.log(err);
        alert('Product not removed from cart');
      });
  };

  const calculateTotal = () => {
    let total = 0;                                  
    const filteredProducts = product              
      .filter((product) => product.cus_email === email && product.status === 'Cart');
  
    const mappedProducts = filteredProducts.map((product) => {
      const key = product.productId;              
      return { key, price: product.price, quantity: product.quantity };
    });
  
    mappedProducts.forEach((product) => {           
      total += product.price * product.quantity;    
    });
  
    return total;                                 
  }

  const getCusAddress = () => {

    axios.get(`http://localhost:8080/api/Customer/GetByEmail/${email}`)
      .then(res => {
        console.log(res);

        if(res.data.addressNo === 'NA' || res.data.contactNo === 'NA' || res.data.addressStreet === 'NA' || res.data.addressCity === 'NA'){
          alert('Please update your address and contact number');
          window.location.href = '/Customer/Account/ManageAccount';
        }
        else{
          setDetailStatus(true);
        }
      })
      .catch(err => {
        console.log(err);
        alert('Error in getting customer address');
      });
  }

  const proceedCheckOut = () => {

      alert('Proceed to Checkout');

      getCusAddress();

  }

  const proceedOrder = () => {
    // Display alert indicating order is being proceeded
    alert('Order Proceeded');

    // Filter products to select only those in the cart for the logged-in customer
    const filteredProducts = product.filter((product) => product.cus_email === email && product.status === 'Cart');

    // Iterate over filtered products
    filteredProducts.forEach((product) => {
        // Construct URL for updating product status
        const updateUrl = `http://localhost:8080/api/CusCartList/UpdateStatus/${product.productId},${"Pending"}`;

        // Send PUT request to update product status
        axios.put(updateUrl)
            .then(res => {
                // Handle successful response
                console.log(res);
                alert('Product status updated');
                window.location.href = '/Customer/Account/OrderHistory';
            })
            .catch(err => {
                // Handle error
                console.error(err);
                alert('Error in updating product status');
            });
    });
};

  

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
            .filter((product) => product.cus_email === email && product.status === 'Cart')
            .map((product) => (
              <div className="cartitems-format cartitems-format-main"  key={product.productId}>
              <img src={product.image_url} alt="" className='carticon-product-icon'/>
              <p className='cart-p'>{product.product_name}</p>
              <p className='cart-p'>Rs. {product.price}</p>
              <button className='cartitems-qunatity'>{product.quantity}</button>
              <p className='cart-p'>Rs. {product.price * product.quantity}</p>
              <button className='cartitems-remove-button' onClick={() => 
                removeFromCart(product.productId)}>Remove</button>
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

            {!detailStatus && <button onClick={proceedCheckOut}>PROCEED TO CHECKOUT</button> }
          </div>
        </div>

        { detailStatus && <div className="cartitems-down">
            <div className="cartitems-total">
              <h1>Address Details </h1>
              <div>
                <div className="cartitems-total-items">
                  <p>Address No</p>
                  <p>Rs. {calculateTotal()}</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                  <p>Address Street</p>
                  <p>Rs. {calculateTotal()}</p>
                </div>
                <hr />
                <div className="cartitems-total-items">
                  <p>Address City</p>
                  <p>Rs. {calculateTotal()}</p>
                </div>  
                <hr />
                <div className="cartitems-total-items">
                  <p>Contact No</p>
                  <p>Rs. {calculateTotal()}</p>
                </div> 
              </div>

              <button onClick={proceedOrder}>PROCEED ORDER</button>
            </div>
        </div>
        }


      </div>  
      <Footer/>
    </div>
  )
}

export default Cart
