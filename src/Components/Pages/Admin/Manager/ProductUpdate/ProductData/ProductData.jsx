import React from 'react'
  

const Table = (props) => {
  return (
    <table>
        <tr>
            <td>{props.product_id}</td>
            <td>{props.name}</td>
            <td>{props.category}</td>
            <td>{props.price}</td>
            <td>{props.description}</td>
            <td>{props.image_url}</td>
            <td>{props.stock}</td>
            <td>{props.supplier_id}</td>
            <td>{props.pharmacy_id}</td>
        </tr>
    </table>

  );
}

export default Table;

