import React from 'react';
import { Container } from 'react-bootstrap';
import './TopSection.css'
const TopSection = () => {
    return (
        <div className='top-section d-flex align-items-center'>
            <Container className="text-center">
                <div data-aos='zoom-in'>
                    <h2 className='text-uppercase text-white fw-light'>Let us take to Your</h2>
                    <h1 className='text-white fw-bold mb-4 text-uppercase top-caption '>dream destinations</h1>
                </div>
                <div className='search-field'>
                    <input type="text" placeholder='Find Your Tours' />
                    <button className="search-btn">Search</button>
                </div>
            </Container>
        </div>
    );
};

export default TopSection;