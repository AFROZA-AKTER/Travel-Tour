import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../banner/slide1.jpg';
import beach from '../../banner/beach.jpg';
import skyDriving from '../../banner/3.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <>
        <Carousel className="img-fluid">
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className="text-muted">
                        <h1>The World is Yours</h1>
                        <h4> Explore Our ECO and Adventure Travel Itineraries</h4>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={beach}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className="text-muted">
                        <h1>Find Next Place To Visit</h1>
                        <h3>Discover amzaing places at exclusive deals</h3>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={skyDriving}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className="text-muted">
                        <h1>Traveling Highlights</h1>
                        <h3>Your New Traveling Idea</h3>
                    </div>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
    );
};

export default Banner;