import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Layout from './components/layout/layout';
import Products from './pages/Products';
import Product from './pages/Product';
import ScrollToTop from './components/ScrollToTop';



function App() {


  
  return (
    <div className='app' data-test-id='app'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>          
            <Route index element={<Home />} />;
            <Route path=':productType' element={<Products />} />;
            <Route path=':productType/:id' element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
