import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import image from './assets/img.png'
const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#home">
          <img
            src={image}
            alt="Logo"
            style={{ width: '150px' }}
          />
        </Navbar.Brand>
        
        {/* Navbar Toggle for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            {/* Navigation Links */}
            <Nav.Link href="#movies">Movies</Nav.Link>
            <Nav.Link href="#events">Events</Nav.Link>
            <Nav.Link href="#sports">Sports</Nav.Link>
            <Nav.Link href="#offers">Offers</Nav.Link>
          </Nav>

          {/* Search Bar */}
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2 search-bar"
              aria-label="Search"
            />
            <Button variant="outline-danger" className="search-button">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
