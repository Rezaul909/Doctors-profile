import React from 'react';
import './Banner.css';
import banner1 from '../../../images/banner/banner1.jpg';
import bannerLogo from '../../../images/banner/banner-logo.png';
import { Button } from 'react-bootstrap';

const Banner = () => {
    return (
        <div className='banner-container mt-5'>
            <div className='img-container'>
                <img src={banner1} alt="" />
            </div>
            <div className="dr-info ">
                <div >
                    <img src={bannerLogo} alt="" />
                </div>
                <h2 className='mt-4'>Dr.Faisal Amin</h2>
                <p>Phone: +1 (840) 480-2483</p>
                <p><small>Email: martinroach@isbol.com</small></p>
                <Button variant="primary">Appointment</Button>
            </div>
        </div>
    );
};

export default Banner;