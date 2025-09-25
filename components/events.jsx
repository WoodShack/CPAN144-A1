import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const Events = () => {
    const [input, setInput] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [showButtonAlert, setShowButtonAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowAlert(true);
    };

    const handleButtonClick = () => {
        setShowButtonAlert(true);
    };

    return (
        <div className="d-flex flex-column align-items-center justify-content-center">
            <Form onSubmit={handleSubmit} className="mb-3">
                <Form.Group controlId="eventInput">
                    <Form.Label>Enter Text</Form.Label>
                    <Form.Control
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type something..."
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-2 me-2">
                    Submit
                </Button>
            </Form>

            <Button variant="secondary" type="button" className="mt-2" onClick={handleButtonClick}>
                Show Alert
            </Button>

            <br />

            {showAlert && (
                <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
                    <b>Form Submitted!</b>
                    <br />
                    You entered: {input}
                </Alert>
            )}
            {showButtonAlert && (
                <Alert variant="info" onClose={() => setShowButtonAlert(false)} dismissible>
                    <b>Button clicked!</b>
                </Alert>
            )}
        </div>
    );
};

export default Events;