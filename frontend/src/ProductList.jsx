import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/products/');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  
const cat = 'product'
  const handleProductClick = (id) => {
    navigate(`/${cat}/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {products.map((product) => (
        <div
          key={product.id}
          onClick={() => handleProductClick(product._id)}
          className="cursor-pointer border rounded p-4 shadow hover:shadow-lg transition"
        >
          <img
            src={`http://127.0.0.1:8000/static`+product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-2"
          />
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <p className="text-gray-600">₹{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
