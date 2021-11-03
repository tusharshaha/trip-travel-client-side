import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Place.css'
const Place = ({ places }) => {
    const {_id,img,name,price,description}= places;
    const history= useHistory()
    return (
        <Col>
            <Card data-aos='fade-up' className='h-100'>
                <Card.Img className='card-img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description.slice(0,110)}...
                    </Card.Text>
                    <h4 className='mb-3'>&#2547; {price}</h4>
                    <Button onClick={()=>history.push(`/register/${_id}`)} variant="warning w-100 text-white fw-bold">BOOK NOW</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Place;