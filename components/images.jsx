import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const imageData = [
    {
        title: "React",
        url: "/image1.webp"
    },
    {
        title: "Bootstrap",
        url: "/image2.webp"
    }
];

const Images = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Card className="header-card">
                    My Images
                </Card>
            </div>

            <Row className="justify-content-center g-0">
                {imageData.map((image, idx) => (
                    <Col md={11} key={idx} className="mb-4 mx-3">
                        <Card>
                            <div className="ratio ratio-16x9">
                                <img
                                    src={image.url}
                                    title={image.title}
                                    style={{ border: 0 }}>
                                </img>
                            </div>
                            <Card.Body>
                                <Card.Title>{image.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Images;