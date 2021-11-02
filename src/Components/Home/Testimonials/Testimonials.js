import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import './Testimonial.css'
const Testimonials = () => {
    const quotes = [
        { id: 1, author: 'Tushar Kumar' },
        { id: 2, author: 'Mijanur Rahaman' },
        { id: 3, author: 'Rabi Chowdhuri' },
    ]
    return (
        <div className='text-center mb-5'>
            <Container>
                <div className='text-uppercase mb-4'>
                    <h2 className='fw-bold'>Testimonials</h2>
                    <p>what our customers say about us</p>
                </div>
                <Row xs={1} sm={2} md={3} lg={3}>
                    {
                        quotes.map(quote =>
                            <Col key={quote.id}>
                                <div className='mb-3 quote'>
                                    <i className="fas fa-quote-left"></i>
                                </div>
                                <p className='fw-normal fs-6'>
                                Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.
                                </p>
                                <p className='text-uppercase fw-bold quote-author'>{quote.author}</p>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Testimonials;