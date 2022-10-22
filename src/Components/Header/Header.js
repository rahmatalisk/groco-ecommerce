import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'

const Header = () => {
    return (
        <div className='my-3'>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Container>
                    <Navbar.Brand className='fs-4 fw-bolder' href="#home"><i class="fas fa-shopping-basket " ></i> <span className='ms-2'>groco</span> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home" className='navbar-link' >Home</Nav.Link>
                            <Nav.Link href="#feature" className='navbar-link'>Features</Nav.Link>
                            <Nav.Link href="#product" className='navbar-link'>Products</Nav.Link>
                            <Nav.Link href="#catagories" className='navbar-link'>Catagories</Nav.Link>
                            <Nav.Link href="#review" className='navbar-link'>Review</Nav.Link>
                            <Nav.Link href="#blogs" className='navbar-link'>Blogs</Nav.Link>

                        </Nav>
                        <Nav>
                            <div class="icons d-flex ">
                                <div class="fas fa-bars" id="menu-btn"></div>
                                <div class="fas fa-search" id="search-btn"></div>
                                <div class="fas fa-shopping-cart" id="cart-btn"></div>
                                <div class="fas fa-user" id="login-btn"></div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;