import React, { useEffect, useState } from 'react';
import './ProductDisplay.css';
import axios from 'axios';

const ProductDisplay = ({ name }) => {
    const cus_email = localStorage.getItem('email');
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        axios.get('http://localhost:8080/api/Products')
            .then(res => {
                const filteredProduct = res.data.find(p => p.name === name);
                setProduct(filteredProduct);
            })
            .catch(err => {
                console.log(err);
            });
    }, [name]);

    const getDateString = () => {
        const inputDate = new Date();
        const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
        return inputDate.toLocaleDateString('en-GB', options).replace(/\//g, '-');
    };

    const handleInput = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const addToCart = async (e) => {
        e.preventDefault();
        if (quantity > product.stock) {
            alert("Not enough stock available");
            return;
        }

        const item = {
            cus_email: cus_email,
            product_id: product.product_id,
            product_name: product.name,
            price: product.price,
            image_url: product.image_url,
            quantity: quantity,
            date: getDateString(),
            status: "Pending"
        };

        try {
            const response = await fetch("http://localhost:8080/api/CusCartList/addCusCartItem", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            });

            if (!response.ok) {
                throw new Error("An error occurred while adding the item to the cart");
            }

            alert("Added to Cart Successfully!");
            window.location.href = "/Browse Products";
        }
        catch (error) {
            console.error("Error adding item to cart:", error);
            alert("Failed to add item to cart. Please try again later.");
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='productDisplay'>
            <div className="display-left">
                <img className="display-main-img" src={product.image_url} alt='' />
            </div>

            <div className="diplay-right">
                <div>
                    <h1>{product.name}</h1>
                    <p className='des'>
                        <b>Description</b> <br />
                        {product.description}
                    </p>
                    <p className='price'>Price : Rs. {product.price}</p>

                    <form className='addcart'>
                        <div className="quantity">
                            <p>Available Stock : {product.stock}</p>
                            <label>Quantity</label>
                            <input
                                type="number"
                                value={quantity}
                                min="1"
                                max={product.stock}
                                onChange={handleInput}
                            />
                        </div>
                        <button onClick={addToCart}>Add to Cart</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
