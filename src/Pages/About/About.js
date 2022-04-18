import React from 'react';
import './About.css';
import image from '../../images/myImage.JPG';

const About = () => {
    return (
        <div className='container mt-5 about-container'>
            <div className='my-img-container'>
                <img src={image} alt="" />
            </div>
            <div className='my-info'>
                <h1>MD.Rezaul Karim</h1>
                <p>Email : reza1381996@gmail.com</p>
                <p>Mobile: 01821017946</p>
                <p><small>
                    To work in the field that improves professional skills and appreciates hard work and integrity in carrying out responsibilities. To contribute my knowledge and skills that involves the development and maintenance of new and existing system.
                    </small>
                </p>
            </div>
        </div>
    );
};

export default About;