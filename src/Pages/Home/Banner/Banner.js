import React from 'react';
import './Banner.css';
import banner1 from '../../../images/banner/banner1.jpg';

const Banner = () => {
    return (
        <div className='banner-container mt-5'>
            <div className='img-container'>
                <img src={banner1} alt="" />
            </div>
            <div className="dr-info ">
                <h2>Dr.Faisal Amin</h2>
                <p>Phone: +1 (840) 480-2483</p>
                <p><small>Email: martinroach@isbol.com</small></p>
            </div>
        </div>
    );
};

export default Banner;