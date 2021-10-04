import React from 'react';
import { Container } from 'react-bootstrap';
import useCourses from '../../hooks/useCourses';
import Blog from '../Blog/Blog';

const Blogs = () => {
    // Receiving data from custom hook
    const [courses] = useCourses([]);
    return (
        <div>
            <Container className="py-4">

                {
                    courses.map(course => <Blog
                        key={course.id}
                        course={course}
                    ></Blog>)
                }

            </Container>
        </div>
    );
};

export default Blogs;