import React from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

//Task list for tasks in progress
const Todo = ({ tasks, moveToInProgress }) => {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Card className="header-card">
                    To Do
                </Card>
            </div>
            
            <ListGroup>
                {tasks.map((task, idx) => (
                    <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
                        <span>{task}</span>
                        <Button
                            variant="primary"
                            size="sm"
                            onClick={() => moveToInProgress(idx)}
                        >
                            Move to In Progress
                        </Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    );
};

export default Todo;