import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {users,logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark " sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Car-Mechanics-House</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/home#expert">Experts</Nav.Link>
                        {users?.email && <Navbar.Text>
                        Signed in as: <a href="#login">{users?.displayName}
                        </a>
                        </Navbar.Text>}
                        {users?.email ?<Button onClick={logOut} variant="light">LogOut</Button>:
                            <Nav.Link as={Link} to="/login">LogIn</Nav.Link>}
                        
                    </Navbar.Collapse>
                    <Nav className="me-auto">
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;