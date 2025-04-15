// src/pages/ProductDetail.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id , category } = useParams();
  const cat = category || "product"
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/${cat}/${id}/`);
      const data = await res.json();
      setProduct(data);
    } catch (err) {
      console.error("Error fetching product:", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
      <img src={`http://127.0.0.1:8000/static`+product.image} alt={product.name} className="w-full h-auto mb-4" />
      <p className="mb-2"><strong>Price:</strong> ₹{product.price}</p>
      <p className="mb-2"><strong>Description:</strong> {product.description}</p>
    </div>
  );
};

export default ProductDetail;
