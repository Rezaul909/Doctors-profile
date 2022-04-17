import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {picture, name, about, price} = service;
    return (
        <div className='single-service'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{price}</p>
            <p><small>{about}</small></p>
            <button>Doctor's Appointment</button>
        </div>
    );
};

export default Service;