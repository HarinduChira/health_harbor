import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const EmpReqMedicine = () => {
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
    <div class="empList">
        <table>
            <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
            {product
                .filter(product => product.stock < 20)
                .map(product => (
                    <tr key={product.product_id}>
                        <td>{product.product_id}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.stock}</td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    </div>
  )
}

export default EmpReqMedicine
