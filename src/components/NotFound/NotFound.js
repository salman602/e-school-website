import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div>
            <Container className="text-center py-3 bg-danger">
                <h3>Error 404!! Page you are looking for is currently not found.</h3>
            </Container>
        </div>
    );
};

export default NotFound;