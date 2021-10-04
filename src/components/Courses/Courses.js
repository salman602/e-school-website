import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useCourses([])
    return (
        <Container>
            <Row xs={1} md={3} className="g-4 py-md-4 py-sm-3">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}></Course>)
                }
            </Row>
        </Container>
    );
};

export default Courses;