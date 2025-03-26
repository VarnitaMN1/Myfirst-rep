import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import './App.css'
import img1 from'./assets/Raazi_-_Poster.jpg'
import img2 from './assets/images (3).jpeg'
import img3 from './assets/images (4).jpeg'
import img4 from './assets/images (5).jpeg'
import img5 from './assets/image 6.jpg'
import img6 from './assets/image7.jpg'
const MoviesGrid = () => {
  const movies = [
    {
      title: 'Pushpa',
      genre: 'Action',
      releaseDate: '2025-05-01',
      rating: 8.5,
      ticketPrice: 300,
      img: {img1}
    },
    {
      title: 'Arundhati',
      genre: 'Horror',
      releaseDate: '2025-06-15',
      rating: 7.2,
      ticketPrice: 250,
      img: {img2}
    },
    {
      title: 'Mission Mangal',
      genre: 'Patriotic',
      releaseDate: '2025-07-20',
      rating: '9.0',
      ticketPrice: '200',
      img: {img3}
    },
    {
      title: 'Raazi',
      genre: 'Patriotic',
      releaseDate: '2025-08-05',
      rating: 7.9,
      ticketPrice: 350,
      img: {img4}
    },
    {
      title: 'Major',
      genre: 'Action',
      releaseDate: '2025-09-10',
      rating: 9.0,
      ticketPrice: 400,
      img: {img5}
    },
    {
      title: 'HangOver',
      genre: 'Comedy',
      releaseDate: '2025-10-25',
      rating: 8.0,
      ticketPrice: 250,
      img: {img6}
    },
  ];

  return (
    <Container className="mt-5">
      <h2>Now Showing</h2>
      <Row>
        {movies.map((movie, index) => (
          <Col key={index} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={movie.img} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                  <strong>Genre:</strong> {movie.genre} <br />
                  <strong>Release Date:</strong> {new Date(movie.releaseDate).toLocaleDateString()} <br />
                  <strong>Rating:</strong> {movie.rating} <br />
                  <strong>Ticket Price:</strong> ₹{movie.ticketPrice} <br />
                </Card.Text>
                <Button className="card-button">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MoviesGrid;
