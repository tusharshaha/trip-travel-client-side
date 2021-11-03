import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import useAuth from '../../hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Home/Header/Header';
import swal from 'sweetalert';
import './Register.css'
const Register = () => {
    const { id } = useParams()
    const [order, setOrder] = useState({})
    const { user } = useAuth()
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [address, setAddress] = useState('')
    useEffect(() => {
        fetch(`https://gentle-cove-60812.herokuapp.com/places/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])

    const handleSubmit = (e) => {
        e.preventDefault()
        const placeOrder = {
            userName: userName || user?.displayName,
            email: email || user?.email,
            date: date,
            address: address,
            price: order?.price,
            orderName: order?.name,
            status: 'Pending'
        }
        swal({
            title: "Are you sure?",
            text: "Do You Want To Place Your Order?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willAdd) => {
                if (willAdd) {
                    axios.post('https://gentle-cove-60812.herokuapp.com/myOrder', placeOrder)
                        .then(res => {
                            if (res.data.insertedId) {
                                swal("Good job!", "Successfuly Place Your Order", "success");
                                e.target.reset()
                            }
                        })
                } else {
                    swal("Opps!", "Your Order isn't Place! Try again", "warning");
                }
            });
    };
    return (
        <>
            <Header></Header>
            <Container className='py-5'>

                <Row xs={1} md={2} className='g-3'>
                    <Col data-aos='fade-right'>
                        <Card className='h-100'>
                            <Card.Img className='card-img' variant="top" src={order?.img} />
                            <Card.Body>
                                <Card.Title>{order?.name}</Card.Title>
                                <Card.Text>
                                    {order?.description}
                                </Card.Text>
                                <h4 className='mb-3'>&#2547; {order.price}</h4>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col data-aos='fade-left'>
                        <div className='register-place'>
                            <h2 className='text-uppercase'>Place Your Order</h2>
                            <form onSubmit={handleSubmit}>
                                <input onBlur={(e) => setUserName(e.target.value)} type="text" placeholder="User Name" defaultValue={user?.displayName} required />
                                <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder="Email" defaultValue={user?.email} required />
                                <input type="text" placeholder="Order Name" defaultValue={order?.name} />
                                <input onBlur={(e) => setDate(e.target.value)} type="date" placeholder="Date" required />
                                <input onBlur={(e) => setAddress(e.target.value)} type="text" placeholder="Address" required />
                                <input type="number" placeholder="Delivery Charge" defaultValue={order?.price} />
                                <input type="submit" value="Place Order" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Register;