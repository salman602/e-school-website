import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Home = () => {
    const [courses, setCourses] = useCourses([])
    console.log(courses);
    return (
        <div style={{ backgroundColor: '#e6e6ee' }}>
            <Container>
                <Row className="pt-4">
                    <Col></Col>
                    <Col md={8} className="text-center">
                        <h5>Are you ready to learn?</h5>
                        <p>E-school is a new concept where any students can study from their home. Our goal is to teach everyone who can not go their school by themselves due to Pendamic or Disabilities.</p>
                    </Col>
                    <Col></Col>
                </Row>

                <Row xs={1} md={2} className="g-4 py-md-4 py-sm-3">
                    {
                        courses.slice(0, 4).map(course => <Course
                            key={course.id}
                            course={course}></Course>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;