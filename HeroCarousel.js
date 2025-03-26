import React from 'react';
import { Carousel } from 'react-bootstrap';
import images from './assets/images.jpeg'
import image1 from './assets/images (1).jpeg'
import image2 from './assets/images (2).jpeg'

const HeroCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Featured Movie 1</h3>
          <p>Description of the featured movie goes here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Featured Movie 2</h3>
          <p>Description of the featured movie goes here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Featured Movie 3</h3>
          <p>Description of the featured movie goes here.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
