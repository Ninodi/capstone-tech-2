import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import CataloguePage from './pages/CataloguePage';
import ProductPage from './pages/ProductPage';
import { Suspense, useEffect } from 'react';
import AdminLogin from './pages/AdminLogin';
import AdminBestSellers from './pages/protected/AdminBestSellers';
import useAuthStore from './store';
import ProtectedRoutes from './ProtectedRoutes';
import AdminProducts from './pages/protected/AdminProducts';

function App() {

  return (
      <Suspense fallback='...loading'>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<HomePage />} />
                  <Route path='/login' element={<AdminLogin />} />
                  <Route path='/contact' element={<ContactPage />} />
                  <Route path='/about' element={<AboutUsPage />} />
                  <Route path='/catalogue/:type' element={<CataloguePage />} />
                  <Route path='/catalogue/:type/:product' element={<ProductPage />} />
                  <Route element={<ProtectedRoutes />}>
                        <Route path='admin/*'>
                            <Route path='bestSellers' element={<AdminBestSellers />} />
                            <Route path='leads' element={<AdminBestSellers />} />
                            <Route path='products' element={<AdminProducts />} />
                            <Route path='bestSellers/:bestSeller' element={<AdminBestSellers />} />
                            <Route path='products/:product' element={<AdminBestSellers />} />
                        </Route>
                  </Route>
              </Routes>
          </BrowserRouter>
      </Suspense>
  );
}

export default App;

