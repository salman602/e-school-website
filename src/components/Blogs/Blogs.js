import React from 'react';
import { Container } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [courses, setCourses] = useCourses([])
    return (
        <div>
            <Container className="py-4">

                {
                    courses.map(course => <Blog className="my-3"
                        key={course.id}
                        course={course}

                    ></Blog>)
                }

            </Container>
        </div>
    );
};

export default Blogs;