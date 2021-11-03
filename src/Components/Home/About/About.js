import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';
const About = () => {
    const aboutInfo = [
        {id:1, icon: 'fas fa-briefcase', title: 'Affordable price guarantee' },
        {id:2, icon: 'fas fa-globe-europe', title: 'wide variety of destinations' },
        {id:3, icon: 'fas fa-thumbs-up', title: 'highly qualifed service' }
    ]
    return (
        <div className='text-center text-white about-section py-5 '>
            <Container className='py-5'>
                <div className='text-uppercase mb-4'>
                    <h2 className='fw-bold'>why choose us?</h2>
                    <p>A brand Name You can trust and rely on</p>
                </div>
                <Row xs={1} sm={2} md={3} lg={3}>
                    {
                        aboutInfo.map(info =>
                            <Col data-aos='fade-in' key={info.id}>
                                <div className='icon-container'>
                                    <i className={info.icon}></i>
                                </div>
                                <h3 className='text-uppercase'>{info.title}</h3>
                                <p className='text-white fw-light fs-6'>
                                    We provide best services. You can book any time. visit your popular places. And we ensure affordable price guarantee. Our service is highly qualified service.You can book ticket for family tour or single toure.
                                </p>
                            </Col>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default About;