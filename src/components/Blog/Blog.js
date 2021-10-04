import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Blog = (props) => {
    const { img, title, lecturer, description } = props.course;
    return (
        <Card className="my-3">
            <Row>
                <Col md={4}>
                    <img width="250" height="195" src={img} alt="" />
                </Col>
                <Col className="py-2" md={8}>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>Lecturer: {lecturer}</Card.Subtitle>
                    <Card.Text>{description.slice(0, 400)}
                        <Link to="/courses"> read More...</Link>
                    </Card.Text>
                </Col>
            </Row>
        </Card>
    );
};

export default Blog;