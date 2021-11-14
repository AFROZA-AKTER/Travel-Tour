import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight,  faClock, faMapMarkerAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Service.css'
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, title, img, price, people, location, duration , description } = service;
    return (
        <>
            <Col lg={4} md={6} className="mt-5">
                <Card className="h-100 ">
                    <Card.Img variant="top" className="h-50" src={img} />
                    <span className="booking">${price}/per person</span>

                    <Card.Body>
                        <Card.Title >
                            <h4 style={{color:"#071C55"}}>{title}</h4>
                        </Card.Title>
                        <Card.Text className="">
                            {description.slice(0, 92)}
                        </Card.Text>
                        <div className="text-info">
                            <div className="d-flex">
                                <FontAwesomeIcon className="m-1" icon={faClock} />
                                <p>Duration:<span style={{ color: "#F97150" }}>{duration}</span></p>
                            </div>
                            <div className="d-flex">
                                <FontAwesomeIcon className="m-1" icon={faUserFriends} />
                                <p>People:<span style={{ color: "#F97150" }}>{people}</span></p>
                            </div>
                            <div className="d-flex">
                                <FontAwesomeIcon className="m-1" icon={faMapMarkerAlt} />
                                <p>{location}</p>
                            </div>
                        </div>
                        <Card.Footer className="d-flex justify-content-between" style={{backgroundColor:"#071C55"}}>
                            <Link to={'/services/' + _id}>
                                <Button variant=" fw-bold " style={{color:"white"}}>Add to List</Button>
                                <FontAwesomeIcon className="pt-1" style={{color:"#F97150"}} icon={faArrowRight} />
                            </Link>
                            <Link to={'/services/' + _id}>
                                <Button variant=" fw-bold " style={{color:"white"}}>Wish List</Button>
                                <FontAwesomeIcon className="pt-1" style={{color:"#F97150"}} icon={faHeart} />
                            </Link>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default Service;