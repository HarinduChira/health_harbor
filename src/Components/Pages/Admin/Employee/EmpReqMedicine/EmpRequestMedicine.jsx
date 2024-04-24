import React, { useState } from 'react';

const EmpRequestMedicine = () => {
  const [medRequest, setMedRequest] = useState({
    product_id: '',
    req_Stock: 0,
    status: 'Pending'
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedRequest({
      ...medRequest,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8080/api/ReqMedicine', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(medRequest),
      });
      if (!response.ok) {
        throw new Error('Failed to request medicine');
      }

      alert(medRequest.req_Stock + ' ' + medRequest.product_id + ' requested'   );
      
      setMedRequest({
        product_id: '',
        req_stock: 0,
        status: 'Pending'
      });
      alert('Medicine requested successfully!');
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to request medicine. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Request Medicine</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="product_id">Product ID</label>
        <input
          type="text"
          id="product_id"
          name="product_id"
          placeholder="Product ID"
          value={medRequest.product_id}
          onChange={handleChange}
          required
        />
        <label htmlFor="req_Stock">Quantity</label>
        <input
          type="number"
          id="req_Stock"
          name="req_Stock"
          placeholder="Quantity"
          value={medRequest.req_Stock}
          onChange={handleChange}
          min="1"
          required
        />
        <button type="submit" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default EmpRequestMedicine;
