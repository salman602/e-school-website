import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Container className="my-3">
            <Row>
                <Col xs={6} md={4}>
                    <h5 className="ms-3">E- School</h5>
                    <div className="d-flex flex-column">
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
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <h5 className="ms-3">Useful Links</h5>
                    <div className="d-flex flex-column">
                        <NavLink className="menu" to="/help" activeClassName="selected">
                            Help Desk
                        </NavLink>
                        <NavLink className="menu" to="/facilities" activeClassName="selected">
                            Facilities
                        </NavLink>
                        <NavLink className="menu" to="/support" activeClassName="selected">
                            Student Support
                        </NavLink>
                        <NavLink className="menu" to="/policy" activeClassName="selected">
                            Privacy & policy
                        </NavLink>
                        <NavLink className="menu" to="/terms" activeClassName="selected">
                            Terms & Conditions
                        </NavLink>
                    </div>
                </Col>
                <Col xs={6} md={4}>
                    <h5>Contact Info</h5>
                    <h6>Address: 15, Hazi Tower, Satarkul Bridge, North Badda, Dhaka.</h6>
                    <h6>Phone: +88 01234-567890</h6>
                    <h6>Email: info@eschool.com</h6>

                </Col>
            </Row>
            <p className="text-center mt-4">&copy; E-School 2022 All Rights reserved.</p>
        </Container>
    );
};

export default Footer;