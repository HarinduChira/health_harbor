import { Description } from '@mui/icons-material';
import React, { useState } from 'react';
import './AddMed.css';

const Form = () => {
  const [formData, setFormData] = useState({
    ProductID: '',
    ProductName: '',
    Description: '',
    Quantity: '',
    ImageLink: '',
    Price: '',
    Category: 'None', // Default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, for example, you can log the form data
    console.log(formData);
    // You can also send the form data to an API endpoint
  };

  return (
    <div className='maindiv'>
      <div className="div-left">
      <form onSubmit={handleSubmit}>
        <div className='itemlabal'>
          <label htmlFor="ProductID">Product ID:</label>
        </div>
        <div className='iteminput'>
          <input
            type="text"
            id="ProductID"
            name="ProductID"
            value={formData.ProductID}
            onChange={handleChange}
            required
          />
        </div>
        <div className='itemlabal'>
          <label htmlFor="ProductName">Product Name:</label>
        </div>
        <div className='iteminput'>
          <input
            type="text"
            id="ProductName"
            name="ProductName"
            value={formData.ProductName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='itemlabal'>
          <label htmlFor="Category">Category:</label>
        </div>
        <div className='iteminput'>
          <select id="Category" name="Category" value={formData.Category} onChange={handleChange}>
            <option value="Drugs">Drugs</option>
            <option value="V&S">Vitamins & Suppliments</option>
            <option value="PainReliver">Pain Reliver</option>
            <option value="B&C">Beauty & Cosmatics</option>
          </select>
        </div>
        <div className='itemlabal'>
          <label htmlFor="Description">Description:</label>
        </div>
        <div className='iteminput'>
          <textarea
            type="Text"
            id="Description"
            name="Description"
            value={formData.Description}
            onChange={handleChange}
            required
          />
        </div>
        <div className='itemlabal'>
          <label htmlFor="ImageLink">Image Link:</label>
        </div>
        <div className='iteminput'>
          <input
            type="text"
            id="ImageLink"
            name="ImageLink"
            value={formData.ImageLink}
            onChange={handleChange}
            required
          />
        </div>
        <div className='itemlabal'>
          <label htmlFor="IPrice">Price:</label>
        </div>
        <div className='iteminput'>
          <input
            type="text"
            id="Price"
            name="Price"
            value={formData.Price}
            onChange={handleChange}
            required
          />
        </div>
        <div className='itemlabal'>
          <label htmlFor="Quantity">Quantity:</label>
        </div>
        <div className='iteminput'>
          <input
            type="Text"
            id="Quantity"
            name="Quantity"
            value={formData.Quantity}
            onChange={handleChange}
            required
          />
        </div>
      </form>
      </div>

      <div className="button-right">
        <button type="submit" className='btn1'>Submit</button>
        <button type="submit" className='btn2'>Refresh</button>
        <button type="submit" className='btn3'>Edit</button>
        <button type="submit" className='btn4'>Update</button>
        <button type="submit" className='btn5'>Delete</button>
      </div>
  </div>);
};

export default Form;
