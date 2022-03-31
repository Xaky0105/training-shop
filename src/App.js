import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Layout from './components/layout/layout';
import Products from './pages/Products';
import Product from './pages/Product';


import {fetchProducts} from './redux/products/products.thunk'
import { useDispatch } from "react-redux"

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchProducts())
    // eslint-disable-next-line
    }, []) 
  return (
      <div className='app' data-test-id='app'>
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
