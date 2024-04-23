import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Item from './Item';
import './BrowseProducts.css';
import Header from '../../Navigation/Header';

const BrowseProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/Products')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    const renderProductsByCategory = (category) => {
        return (
            <div key={category} >
                <h1>{category}</h1>
                <ul className={category.toLowerCase().replace(/\s+/g, '')}>
                    {products
                        .filter(product => product.category === category)
                        .map(product => (
                            <li key={product.id}>
                                <Item name={product.name} price={product.price} image_url={product.image_url} product_id={product.product_id} />
                            </li>
                        ))}
                </ul>
            </div>
        );
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='page'>
            <Header logStatus={true} />
            <div className="products">
                {renderProductsByCategory('Pain Relievers')}
                {renderProductsByCategory('Vitamins & Supplements')}
                {renderProductsByCategory('Beauty & Personal Care')}
                {renderProductsByCategory('Medical Equipment')}
                {renderProductsByCategory('Pet Products')}
            </div>
        </div>
    );
};

export default BrowseProducts;
