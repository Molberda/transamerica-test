import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import '../src/Css/App.css';
import Home from './Pages/Home';
import { products } from './Products.js'
import { reviews } from './Reviews.js'
import ProductList from './Pages/ProductList';
import ProductPage from './Pages/ProductPage';
import Footer from './Components/Footer';
import Burger from './Components/Burger';
import './Css/Queries.css'

function App() {
  return (
    <Router>
      <Nav/>
      <Burger/>
      <Routes>
        <Route path='/' element={<Home products={products} reviews={reviews}/>}/>
        <Route path='/productlist' element={<ProductList products={products}/>}/>
        <Route path='/product/:id' element={<ProductPage products={products}/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
