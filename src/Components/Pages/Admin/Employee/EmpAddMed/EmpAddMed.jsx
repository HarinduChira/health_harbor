import React, { useState } from 'react';
import './EmpAddMed.css'; // Import CSS file

const EmpAddMed = () => {
  const [medicine, setMedicine] = useState({
    ProductId: '',
    ProductName: '',
    Category: '',
    Price: 0,
    Stock: 0,
    Description: '',
    Image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({
      ...medicine,
      [name]: value
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here

    try{
        fetch('http://localhost:5000/addMedicine', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(medicine),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            console.log('Form submitted:', medicine);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    }
    catch(err){
        console.log(err);
    }
    
  };




  return (
    <div className="addMedicine">
            <div className="addMedicine-Left">
                <form>
                <div className="form-group">
                    <label htmlFor="ProductId">Product ID</label>
                    <input type="text" id="ProductId" name="ProductId" 
                    placeholder="Enter Product ID" 
                    value={medicine.ProductId}
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group">
                    <label htmlFor="ProductName">Product Name</label>
                    <input type="text" id="ProductName" name="ProductName" 
                    placeholder="Enter Product Name" 
                    value={medicine.ProductName}
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group">
                    <label htmlFor="Category">Category</label>
                    <input type="text" id="Category" name="Category" 
                    placeholder="Enter Category" 
                    value={medicine.Category}
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group">
                    <label htmlFor="Price">Price</label>
                    <input type="text" id="Price" name="Price" 
                    placeholder="Enter Price" 
                    value={medicine.Price}
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group">
                    <label htmlFor="Stock">Stock</label>
                    <input type="text" id="Stock" name="Stock" 
                    value={medicine.Stock}
                    placeholder="Enter Stock" 
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group">
                    <label htmlFor="Description">Description</label>
                    <input type="text" id="Description" name="Description" 
                    placeholder="Enter Description" 
                    value={medicine.Description}
                    onChange={handleChange}
                    required />
                </div>
                <div className="form-group">
                    <label htmlFor="Image">Image</label>
                    <input type="text" id="Image" name="Image" 
                    placeholder="Enter Image URL" 
                    value={medicine.Image}
                    onChange={handleChange}
                    required />
                </div>
                
                </form>
            </div>
            <div className="addMedicine-Right">
                <button className='addMedicine-Right-btn' onClick={handleAdd}>Add</button>
                <button className='addMedicine-Right-btn'>Search</button>
                <button className='addMedicine-Right-btn'>Edit</button>
                <button className='addMedicine-Right-btn'>Delete</button>
                <button className='addMedicine-Right-btn'>Update</button>
            </div>
    </div>
    );
};

export default EmpAddMed;
