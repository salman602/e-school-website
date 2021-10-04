import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import useCourses from '../../hooks/useCourses';


const CourseDetails = () => {
    // getting dynamic url with useParams
    const { id } = useParams();

    // Receving data from custom hook
    const [courses] = useCourses([]);

    // declear state for storing updated data
    const [singleCourse, setSingleCourse] = useState({})

    // checking condition using Array.find method inside useEffect with dependencys.
    useEffect(() => {
        const foundCourse = courses?.find((course) => course?.id === Number(id));
        setSingleCourse(foundCourse);
    }, [courses, id]);

    return (
        <div style={{ backgroundColor: '#fafafa' }}>
            <Container className="py-4">
                <Row>
                    <Col></Col>
                    <Col xs={12} md={8}>
                        <Card className="text-center">
                            <Card.Header>Course Details</Card.Header>
                            <Card.Body>
                                <Card.Title>Course Title: {singleCourse?.title}</Card.Title>
                                <Card.Text>
                                    <b>Description:</b> {singleCourse?.description}
                                </Card.Text>
                                <Card.Subtitle>Price: ${singleCourse?.price}</Card.Subtitle>

                            </Card.Body>
                            <Card.Footer className="text-muted">Total Seats: {singleCourse?.seats}</Card.Footer>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default CourseDetails;