import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../src/Css/App.css';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import { products } from './Products.js'

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home products={products}/>}/>
      </Routes>
    </Router>
  );
}

export default App;
