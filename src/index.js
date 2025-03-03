import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styling.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import ShoeHaven from './pages/ShoeHaven';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GridNews from './pages/GridNews';
import ScrollToTop from './component/ScrollToTop';
import MealSprint from './pages/Mealsprint';
import Moposh from './pages/Moposh';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-me" element={<About />} />
        <Route path='/moposh' element={<Moposh/>}/>
        <Route path="/shoe-haven" element={<ShoeHaven />} />
        <Route path="/grid-news" element={<GridNews />} />
        <Route path="/mealsprint" element={<MealSprint />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
