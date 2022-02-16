import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Home from './pages/Home';
import Layout from './components/layout/layout';
import Women from './pages/Women';
import Men  from './pages/Men'
import Product from './pages/Product';



function App() {
  
  
  return (
    <div className='app' data-test-id='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />;
          <Route path='Women' element={<Women />} />;
          <Route path='Men' element={<Men />} />;
          <Route path={`:productType/:id`} element={<Product />} />
          <Route path={`:productType/:id`} element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
