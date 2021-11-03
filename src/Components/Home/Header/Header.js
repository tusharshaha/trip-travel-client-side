import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user,logOut } = useAuth()
    return (
        <div className='navbar'>
        <Navbar  expand="lg" fixed='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home" >
                    <h3 className='site-title'>TripTravel</h3>
                </Navbar.Brand>
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
        </div>
    );
};

export default Header;