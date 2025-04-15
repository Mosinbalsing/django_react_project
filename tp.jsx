import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/')
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {products.map(product => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <img src={`http://localhost:8000${product.image}`} alt={product.name} width="150" />
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
