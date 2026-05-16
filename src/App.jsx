import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import Contact from './pages/Contact';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
