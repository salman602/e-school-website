import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo/Logo.png'

const Header = () => {
    return (
        <Navbar className="custom-bg" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    <img src={logo} alt="" width="148" height="48" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="menu" to="/home" activeClassName="selected">
                            Home
                        </NavLink>
                        <NavLink className="menu" to="/about" activeClassName="selected">
                            About Us
                        </NavLink>
                        <NavLink className="menu" to="/courses" activeClassName="selected">
                            Courses
                        </NavLink>
                        <NavLink className="menu" to="/blogs" activeClassName="selected">
                            Blogs
                        </NavLink>
                        <NavLink className="menu" to="/contact" activeClassName="selected">
                            Contact Us
                        </NavLink>
                    </Nav>

                    <button className="btn btn-outline-info rounded-pill text-black">Sign in</button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header; <h2>This is header.</h2>