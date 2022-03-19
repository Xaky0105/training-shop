import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from './redux';

import Home from './pages/Home';
import Layout from './components/layout/layout';
import Products from './pages/Products';
import Product from './pages/Product';

function App() {
  return (
    <Provider store={store}>
      <div className='app' data-test-id='app'>
        <Routes>
          <Route path='/' element={<Layout />}>          
              <Route index element={<Home />} />;
              <Route path=':productType' element={<Products />} />;
              <Route path=':productType/:id' element={<Product />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
