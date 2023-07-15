import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Course from './components/courses/Course';
import Header from './components/Layout/Header.jsx';
import Footer from './components/Layout/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Forgetpassword from './components/auth/Forgetpassword';
import Resetpassword from './components/auth/Resetpassword';
import Contact from './components/contact/Contact';
import Request from './components/request/Request';
import About from './components/about/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/resetpassword/:token" element={<Resetpassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/request" element={<Request />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
