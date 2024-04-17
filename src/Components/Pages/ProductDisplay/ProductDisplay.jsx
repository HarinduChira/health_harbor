import React from 'react'
import './ProductDisplay.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

const ProductDisplay = (name) => {

    const cus_email = "harinduchira@gmail.com";

    const[product, setProduct] = useState([]);

    const[item, setItem] = useState(
        {
            cus_email : "",
            product_id : null,
            product_name : "",
            price : null,
            image_url : "",
            quantity : null,
            date : ""  
        }
    );
    

    useEffect(() => {

        axios.get('http://localhost:8080/api/Products')
        .then(res => {
            console.log(res);
            setProduct(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);

    const handleInput = (e) => {
        setItem({
            cus_email : cus_email,
            quantity : e.target.value,
            date : new Date().getDay.toLocaleString()
        });
    }



    const addtocart = async (e) => {
        e.preventDefault();



        if (document.getElementById('quantity').value > product.stock) {
            alert("Not enough stock available");
            return;
        }

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
            
            window.location.href = "/Cart";

        }
        catch (error) {
            console.error("Error sending data:", error);
        }

    }





  return (

    <div className='productDisplay'>


        <div className="display-left">
            
            {product 
            .filter(product => product.name === name.name)
            .map(product => (

            <img className="display-main-img" src={product.image_url} alt='' />       
                    
            ))}            
        </div>

        
        <div className="diplay-right">

            {product 
            .filter(product => product.name === name.name)
            .map(product => (

            <div onLoad={item.image_url = product.image_url}>            
                <h1 onLoad={item.product_id = product.product_id}>{product.name}</h1>
                <p className='des' onLoad={item.product_name = product.name}>
                    <b>Description</b> <br />
                    {product.description}
                </p>
                <p className='price'  onLoad={item.price = product.price}>Price : Rs. {product.price} </p>
                
                <form action="" className='addcart' >
                    <div className="quantity">
                        <p>Available Stock : {product.stock}</p>
                        <label>Quantity</label>
                        <input type="number" defaultValue={1} min="1" max="20" id='quantity'
                            onChange={handleInput}
                        />
                    </div>
                    <button onClick={addtocart} >Add to Cart</button>
                </form>
                {/* <p>{product.reviews}</p> */}
            </div>
                     
            ))}
        </div>
      
    </div>
    
  )
}

export default ProductDisplay
