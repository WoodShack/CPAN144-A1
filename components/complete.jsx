import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const Complete = ({ tasks }) => {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Card className="header-card">
                    Complete
                </Card>
            </div>
            <ListGroup>
                {tasks.map((task, idx) => (
                    <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
                        <span>{task}</span>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default Complete;