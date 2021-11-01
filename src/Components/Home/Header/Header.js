import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">TripTravel</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto text-center">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                        <Nav.Link as={Link} to="/manageOrder">Manage Orders</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Navbar.Text className='text-white'>
                            Signed in as:
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;