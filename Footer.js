import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col>
            <h5>BookMyShow</h5>
            <p>Get your tickets for movies, events, and shows at the best prices.</p>
          </Col>
          <Col>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>FAQs</li>
            </ul>
          </Col>
          <Col>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
