import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
const [services , setServices] = useState();
    useEffect(() =>{
        fetch('http://localhost:5000/allServices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="tour">
            <h4 style={{ color: "#F97150" }} className="text-center mt-5">EXPLORE GREAT PLACES</h4>
            <h1 style={{ color: "#071C55" }} className="text-center">POPULAR PACKAGES</h1>
            <div className="row m-5">
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;