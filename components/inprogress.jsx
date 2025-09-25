import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

const InProgress = ({ tasks, moveToComplete }) => {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Card className="header-card">
                    In Progress
                </Card>
            </div>
            <ListGroup>
                {tasks.map((task, idx) => (
                    <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
                        <span>{task}</span>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => moveToComplete(idx)}
                        >
                            Move to Complete
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default InProgress;