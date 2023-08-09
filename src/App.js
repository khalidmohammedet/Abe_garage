import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components 👉
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About_us from './components/About_us/About_us';
import Contact_us from './components/Contact_us/Contact_us';
import Service from './components/Services/Services';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* <Route path="/admin" element={
            <>
              <Header />
              <Admin />
              <Footer />
            </>
          } /> */}
          <Route path="/login" element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <Contact_us />
              <Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <Header />
              <Service />
              <Footer />
            </>
          } />
          <Route path="/about" element={
            <>
              <Header />
              <About_us />
              <Footer />
            </>
          } />
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;