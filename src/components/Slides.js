import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Slides.css'

function Slides() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500}
          className="d-block w-100"
          src="https://i.postimg.cc/FKzNwBVr/1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Chocolate Factory</h3>
          <p>Indulge in the pure, unsweetened chocolate in every quarter</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500}
          className="d-block w-100"
          src="https://i.postimg.cc/CMkSyDkq/2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Chocolate Factory</h3>
          <p>Indulge in the pure, unsweetened chocolate in every quarter</p>
                  </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500}
          className="d-block w-100"
          src="https://i.postimg.cc/XJ619ZJR/3.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Chocolate Factory</h3>
          <p>Indulge in the pure, unsweetened chocolate in every quarter</p>        
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slides