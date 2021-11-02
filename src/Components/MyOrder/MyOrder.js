import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';

const MyOrder = () => {
    const {isLoading} = useAuth()
    if(isLoading){
        return <div className='text-center mt-3'>
        <Spinner animation="grow" variant="warning" />
    </div>
    }
    return (
        <>
            <Header></Header>
            <div>
                <h3>hello hunny bunny</h3>
            </div>
            <Footer></Footer>
        </>
    );
};

export default MyOrder;