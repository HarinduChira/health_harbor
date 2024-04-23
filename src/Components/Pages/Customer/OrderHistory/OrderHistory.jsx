import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const OrderHistory = () => {

  const[cusCartList, setCusCartList] = useState([]);

    useEffect(() => {
                
        axios.get('http://localhost:8080/api/CusCartList')
        .then(res => {
            console.log(res);
            setCusCartList(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, []);
    
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>price</th>
                    <th>Quantity</th>
                    <th>date</th>
                    <th>Total Price</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {cusCartList
                    .filter((cusCartList) => cusCartList.cus_email === localStorage.getItem('email') && cusCartList.status === 'Pending')
                    .map((cusCartList) => (
                    
                    <tr>
                        <td>{cusCartList.image_url}</td>
                        <td>{cusCartList.product_name}</td>
                        <td>{cusCartList.price}</td>
                        <td>{cusCartList.quantity}</td>
                        <td>{cusCartList.date}</td>
                        <td>{cusCartList.price }* {cusCartList.quantity}</td>
                        <td>{cusCartList.status}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default OrderHistory
