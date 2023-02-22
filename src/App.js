import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import ServiceDetails from './Components/ServiceDetails';
import ProjectDetails from './Components/ProjectDetails';
import BlogDetails from './Components/BlogDetails';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/service-details' element={<ServiceDetails />} />
          <Route path='/project-details' element={<ProjectDetails />} />
          <Route path='/blog-details' element={<BlogDetails />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
