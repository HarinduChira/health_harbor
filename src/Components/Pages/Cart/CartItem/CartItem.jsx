import React from 'react'
import './CartItem.css'

const CartItem = (props) => {
  return (
    <div>
        <table>
            <tr>
                <td>{props.product_name}</td>
                <td>{props.quantity}</td>
                <td>
                    <form action="">
                        

                    </form>
                </td>
                <td>{props.price * props.quantity}</td>
            </tr>
        </table>
    </div>
  )
}

export default CartItem
