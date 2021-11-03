import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './NotFound.css'
const NotFound = () => {
    const history = useHistory()
    return (
        <Container>
            <div className='notFound'>
                <img src={`https://image.freepik.com/free-vector/tiny-people-examining-operating-system-error-warning-web-page-isolated-flat-illustration_74855-11104.jpg`} alt="" />
                <Button onClick={()=>history.push('/home')} variant='warning' className='text-white fw-bold'>Back To Home</Button>
            </div>
        </Container>
    );
};

export default NotFound;