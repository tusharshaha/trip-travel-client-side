import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
    const { user,logOut } = useAuth()
    return (
        <Navbar sticky="top" expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">TripTravel</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto text-center">

                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        {user.email? <>
                        <Nav.Link as={Link} to="/myOrders">My Orders</Nav.Link>
                        <Nav.Link as={Link} to="/manageOrder">Manage Orders</Nav.Link>
                        <Nav.Link as={Link} to="/addPlace">Add Place</Nav.Link>
                        <Nav.Link as={Link} to="/login"><Button variant="warning" onClick={logOut} className='text-white fw-bold' size="sm">
                            LogOut
                        </Button></Nav.Link>
                        <Navbar.Text className='text-white text-capitalize'>
                            {user.displayName}
                        </Navbar.Text>
                        </>
                        :
                        <Nav.Link as={Link} to="/login"><Button variant="warning" className='text-white fw-bold' size="sm">
                            Login
                        </Button></Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;