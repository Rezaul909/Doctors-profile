import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[]);
    return (
        <div className='container'>
            <h1 className='text-primary my-5'>Our Services</h1>
            <div className='service-container'>
                {
                    services.map(service => <Service 
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;