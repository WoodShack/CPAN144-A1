import React from 'react';
import Card from 'react-bootstrap/Card';

const Welcome = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>
                    Scott Woodhouse
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    N01774081
                </Card.Subtitle>
                <Card.Text>
                    Welcome to CPAN114 Assignment 1
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Welcome;