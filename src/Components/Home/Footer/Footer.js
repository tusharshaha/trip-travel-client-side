import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-dark text-white text-center  py-5'>
            <Container>
                <div className='mb-2'>
                    <span className='fs-6 me-2'>Privacy Policy</span> | <span className='fs-6 mx-2'>Terms of Use</span> | <span className='fs-6 ms-2'>Contact Support</span>
                </div>
                <div>
                    <span className='fs-6 me-2'>Copyright &copy; TripTravel.com All Right Reserved</span> | <span className='fs-6 ms-2'>Design by: <span className='fw-bold'>Tushar Kumar Shaha</span></span>
                </div>
                <div className='link-container'>
                    <a rel="noreferrer" href="https://www.facebook.com/tusharshaha619" target='_blank'><i className="fab fa-facebook"></i></a>
                    <a rel="noreferrer" href="https://www.twitter.com" target='_blank'><i className="fab fa-twitter-square"></i></a>
                    <a rel="noreferrer" href="https://www.google.com" target='_blank'><i className="fab fa-google"></i></a>
                    <a rel="noreferrer" href="https://www.linkedin.com/in/tushar-kumar-shaha/" target='_blank'><i className="fab fa-linkedin"></i></a>
                    <a rel="noreferrer" href="https://www.instagram.com" target='_blank'><i className="fab fa-instagram-square"></i></a>
                </div>
            </Container>
        </div>
    );
};

export default Footer;