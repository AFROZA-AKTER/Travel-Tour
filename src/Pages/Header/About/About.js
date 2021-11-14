import { faArrowLeft, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const About = () => {
    return (
            <div id="about" className="mt-5 d-lg-flex  m-5 ">
                <div className="text-muted ">
                    <div>
                        <h3 className="text-start" style={{ color: "#434A54" }}>EPIC JOURNEYS</h3>
                        <p className="text-start">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.
                            <br />
                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.

                        </p>
                    </div>

                    <div className="my-2 d-lg-flex">
                        <div className="px-5">
                            <div className="d-flex p-2">
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                                <p className="px-2">First Class Flights</p>
                            </div>
                            <div className="d-flex p-2">
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                                <p className="px-2">5 Star Accommodations</p>
                            </div>
                            <div className="d-flex p-2">
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                                <p className="px-2">Inclusive Packages</p>
                            </div>
                            <div className="d-flex p-2">
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                                <p className="px-2">Latest Model Vehicles</p>
                            </div>
                        </div>
                        <div className="px-5">
                            <div className="d-flex p-2">
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                                <p className="px-2">Handpicked Hotels</p>
                            </div>
                            <div className="d-flex p-2">
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                                <p className="px-2">Accesibility managment</p>
                            </div>
                            <div className="d-flex p-2">
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                                <p className="px-2">10 Languages available</p>
                            </div>
                            <div className="d-flex p-2">
                                <div><FontAwesomeIcon icon={faArrowRight} /></div>
                                <p className="px-2">+120 Premium city tours</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src="http://swlabs.co/exploore/html/assets/images/homepage/about-us-4.png" alt="" />
                </div>
            </div>
    );
};

export default About;