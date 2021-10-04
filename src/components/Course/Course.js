import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Course.css'

const Course = (props) => {


    const { id, img, title, description, price, seats } = props.course;
    return (
        <Col>
            <Card className="h-100 shadow rounded-3 card-bg">
                <Card.Img height="220" variant="top" src={img} />
                <Card.Body className="text-white">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 125)}
                    </Card.Text>
                    <Card.Subtitle>Price: ${price}</Card.Subtitle>
                    <p>Seats available: {seats}</p>
                    <NavLink className="enroll-btn btn btn-outline-info rounded text-white" to={`/course/${id}`} activeClassName="selected">
                        Enroll Course
                    </NavLink>
                </Card.Body>

            </Card>
        </Col>
    );
};

export default Course;