import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutUsPage from './pages/AboutUsPage';
import CataloguePage from './pages/CataloguePage';
import ProductPage from './pages/ProductPage';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const {t, i18n} = useTranslation()
  return (
    <Suspense fallback='...loading'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/about' element={<AboutUsPage />}/>
          <Route path='/catalogue/:type' element={<CataloguePage />}/>
          <Route path='/catalogue/:type/:product' element={<ProductPage />}/>
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
