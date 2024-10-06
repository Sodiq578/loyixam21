import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Routerni olib tashlang
import Header from './layouts/header/header';
import Footer from './layouts/footer/footer';
import Blog from './pages/blog';
import Home from './pages/home'
import About from './pages/about';
import Hire from './pages/hire';
import Service from './pages/service';
import Studies from './pages/studies';
import Works from './pages/works';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/works" element={<Works />} />
        <Route path="/hire" element={<Hire />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
