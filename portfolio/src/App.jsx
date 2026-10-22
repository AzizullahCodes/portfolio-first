// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MyNavbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import About from './pages/about/about';
import Projects from './pages/projects/projects';
import Contact from './pages/contact/contact';

// Complete Single-Page Layout component
function SinglePagePortfolio() {
  return (
    <main className="portfolio-main">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="portfolio-app">
        <MyNavbar />

        <Routes>
          {/* Main single-page portfolio containing all sections */}
          <Route path="/" element={<SinglePagePortfolio />} />

          {/* Any other routes redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
