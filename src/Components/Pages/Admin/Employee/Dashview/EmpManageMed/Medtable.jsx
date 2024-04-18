import React from 'react'
import DataTable from 'react-data-table-component'
import './Medtable.css';

const Medtable = () => {
    const columns =[
        {
            name: 'Product ID',
            selector: row => row.ProductID
        },
        {
            name: 'Product Name',
            selector: row => row.ProductName
        },
        {
            name: 'Measurment',
            selector: row => row.Measurment
        },
        {
            name: 'Quantity',
            selector: row => row.Quantity
        }, 
        {
            name: 'Dealer',
            selector: row => row.Dealer
        },
        {
            name: 'Action',
            selector: row => row.Action
        },
    ];

    const data = [
        {
            ProductID: 1,
            ProductName: 'Paracectamol',
            Measurment: '500mg',
            Quantity:'200',
            Dealer:'Man',
            Action: 'delete'
        }
    ]
  return (
    <div>
      <DataTable className='table' columns={columns} data={data}>

      </DataTable>
    </div>
  )
}

export default Medtable
