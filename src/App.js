import { useState } from 'react';
import './App.css';
import Header from "./components/Header"
import AllProduct from './components/AllProduct';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import PageNotFound from './components/PageNotFound';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {


  return (
    <Router>
    <div className="App">
    <Header/>
      <Routes>
      <Route exact path="/" element={<AllProduct/>}/>
      <Route exact path="/products/:productId" element={<ProductDetail/>}/>
      <Route exact path="*" element={<PageNotFound/>}/>
      </Routes>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
