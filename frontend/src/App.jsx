import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import NecklaceList from './NecklaceList';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/necklace" element={<NecklaceList />} />
        <Route path="/:category/:id" element={<ProductDetail />} />

      </Routes>
    </Router>
  );
}

export default App;
