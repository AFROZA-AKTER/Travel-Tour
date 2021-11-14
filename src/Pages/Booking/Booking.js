import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock, faMapMarkerAlt, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Card, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState();
    const { user } = useAuth();

    useEffect(() => {
        fetch(` https://glacial-tundra-74344.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    console.log(service);

    const { register, handleSubmit, watch, reset , formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.email = user.email;

        fetch(' https://glacial-tundra-74344.herokuapp.com/confirmOrder', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                if(result.insertedId){
                    alert('Congrats!  Successfully Booking Added!');
                    reset();
                }
            })
        console.log(data);
    };

    return (
        <div className="d-flex">
            <Card className="h-100 w-50 m-5">
                <Card.Img variant="top" className="h-50" src={service?.img} />
                <Card.Body>
                    <Card.Title >
                        <h4 style={{ color: "#071C55" }}>{service?.title}</h4>
                    </Card.Title>
                    <div className="text-info">
                        <div className="d-flex">
                            <FontAwesomeIcon className="m-1" icon={faClock} />
                            <p>Duration:<span style={{ color: "#F97150" }}>{service?.duration}</span></p>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon className="m-1" icon={faUserFriends} />
                            <p>People:<span style={{ color: "#F97150" }}>{service?.people}</span></p>
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon className="m-1" icon={faMapMarkerAlt} />
                            <p>{service?.location}</p>
                        </div>
                    </div>
                    <Card.Text className="">
                        {service?.description}
                    </Card.Text>

                </Card.Body>
            </Card>
            <div className="w-50 m-5">
                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    <input defaultValue={service?.title} {...register("title")} />
                    <input defaultValue={service?.duration} type="text" {...register("duration")} />
                    <input defaultValue={service?.location} type="text" {...register("location")} />
                    <input defaultValue={service?.img} {...register("img")} />
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="Phone number" defaultValue="" {...register("phone")} />
                    
                        <input style={{ backgroundColor: "#071C55", color: "white" }} className="border-0 rounded" type="submit" value="Booking Now" />
                   
                </form>
            </div>
        </div>
    );
};

export default Booking;