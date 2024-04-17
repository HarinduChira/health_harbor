import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Item from './Item';
import './BrowseProducts.css';
import Header from '../../Navigation/Header';
import Footer from '../../Navigation/Footer';

const BrowseProducts = () => {
    
    const[product, setProduct] = useState([]);

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


  return (
    <div className='page'>
        <Header/>
        <br />
        <br />
        <br />
        <br />

        <div className="products">
            <h1>Pain Relievers</h1>
            <ul className='painkillers'>                
                {product
                    .filter(product => product.category === 'Pain Relievers')                
                    .map(product => (
                    <li key={product.id}>
                        <Item name={product.name} price={product.price} image_url={product.image_url} />
                    </li>
                    
                ))}
            </ul>

            <h1>Vitamins & Supplements</h1>
            <ul className='Vitamins'>
                
                {product
                    .filter(product => product.category === 'Vitamins & Supplements')
                    .map(product => (
                    <li key={product.id}>
                        <Item name={product.name} price={product.price} image_url={product.image_url} />
                    </li>
                ))}
            </ul>

            <h1>Beauty & Personal Care</h1>
            <ul className='Beauty'>
                
                {product
                    .filter(product => product.category === 'Beauty & Personal Care')
                    .map(product => (
                    <li key={product.id}>
                        <Item name={product.name} price={product.price} image_url={product.image_url} />
                    </li>
                ))}
            </ul>
        </div>

        <Footer/>
        
      
    </div>
  )
}

export default BrowseProducts
