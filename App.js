import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import { Container } from 'react-bootstrap';
import MyNavbar from './Navbar'; // Assuming you already have a Navbar component
import HeroCarousel from './HeroCarousel';
import Footer from './Footer';
import MoviesGrid from './MoviesGrid';
import './App.css'
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set the logged-in state to true
  };

  return (
    <div>
      {!isLoggedIn ? (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div>
          <MyNavbar />
          <Container className="mt-4">
            
          </Container>
          <HeroCarousel />
          <MoviesGrid />
      <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
