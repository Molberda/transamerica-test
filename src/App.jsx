import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/Css/App.css';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import { products } from './Products.js'
import ProductList from './Pages/ProductList';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home products={products}/>}/>
        <Route path='/productlist' element={<ProductList products={products}/>}/>
        <Route path='/product/:id' element={<ProductPage products={products}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
