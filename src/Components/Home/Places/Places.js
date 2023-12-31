import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Place from '../../Place/Place';
import './Places.css'
const Places = () => {
    const [places, setPlaces] = useState([])
    useEffect(() => {
        fetch('https://trip-travel.vercel.app/places')
            .then(res => res.json())
            .then(data => setPlaces(data))
    }, [])

    return (
        <div className='my-5'>
            <Container>
                <div className='text-center text-uppercase'>
                    <h2 className='fw-bold'>Best offers</h2>
                    <p>Check Our top-reated tours</p>
                </div>
                {places.length >0 ?
                    <Row xs={1} sm={2} md={3} className='g-3'>
                        {
                            places?.map(destination => <Place key={destination._id} places={destination}></Place>)
                        }
                    </Row>
                    :
                    <div className='text-center mt-3'>
                        <Spinner animation="grow" variant="warning" />
                    </div>
                }
            </Container>
        </div>
    );
};

export default Places;