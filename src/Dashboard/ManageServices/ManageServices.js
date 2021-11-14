import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageServices = () => {
    const [services , setServices] = useState();
    const [control , setControl] = useState(false); 
    
    useEffect(() =>{
        fetch(' https://glacial-tundra-74344.herokuapp.com/allServices')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    const handleDelete = id =>{
        fetch(` https://glacial-tundra-74344.herokuapp.com/deleteService/${id}` , {
            method: "DELETE" ,
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                setControl(!control);
            }
        })
        console.log(id);
    }

    console.log(services)
    return (
        <div>
            <h2 style={{ color: "#F97150" }} className="text-center mt-2">Manage Services</h2>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tour Title </th>
                    <th>Tour Location</th>
                    <th>Image Link</th>
                    <th>Action</th>
                </tr>
            </thead>
            {services?.map((service , index) => (
                <tbody>
                    <tr>
                        <td>{index}</td>
                        <td>{service.title}</td>
                        <td>{service.location}</td>
                        <td>{service.img}</td>
                        <button onClick={() => handleDelete(service._id)}  className="btn bg-danger p-2 my-3 mx-2 text-white">DELETE</button>
                    </tr>
                </tbody>
    ))}
    </Table>
        </div>
    );
};

export default ManageServices;