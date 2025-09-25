import React from 'react';
import Card from 'react-bootstrap/Card';

//Welcome card component
const Welcome = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '50px'
        }}>

            <Card style={{ width: '400px' }}>
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
            
        </div>
    );
};

export default Welcome;