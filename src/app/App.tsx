import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Main from './main';
import { respAsync } from '../tool/respAsync';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';
import Products from './products';
import Article from './article';
import CreateProduct from './create-product';

function App() {
  const dispath = useDispatch<AppDispatch>()

  useEffect(() => {
    respAsync(dispath)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='products' element={<Products />} />
        <Route path='/products/:id' element={<Article />}/>
        <Route path='/create-product' element={<CreateProduct />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
