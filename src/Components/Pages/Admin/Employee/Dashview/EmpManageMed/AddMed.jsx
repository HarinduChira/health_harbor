import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    ProductID: '',
    ProductName: '',
    Measurement: '',
    Quantity: '',
    Dealer: 'None', // Default role
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="ProductID">Product ID:</label>
        <input
          type="text"
          id="ProductID"
          name="ProductID"
          value={formData.ProductID}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="ProductName">Product Name:</label>
        <input
          type="text"
          id="ProductName"
          name="ProductName"
          value={formData.ProductName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="Measurement">Measurement:</label>
        <input
          type="Text"
          id="Measurement"
          name="Measurement"
          value={formData.Measurement}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="Quantity">Quantity:</label>
        <input
          type="Text"
          id="Quantity"
          name="Quantity"
          value={formData.Quantity}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="Dealer">Dealer Name:</label>
        <select id="Dealer" name="Dealer" value={formData.Dealer} onChange={handleChange}>
          <option value="user">Dealer 1</option>
          <option value="admin">Dealer 2</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
