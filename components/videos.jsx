import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const videoData = [
    {
        title: "React Tutorial",
        url: "https://www.youtube.com/embed/SqcY0GlETPk"
    },
    {
        title: "Bootstrap Tutorial",
        url: "https://www.youtube.com/embed/4sosXZsdy-s"
    }
];

const Videos = () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Card className="header-card">
                    My Videos
                </Card>
            </div>

            <Row className="justify-content-center g-0">
                {videoData.map((video, idx) => (
                    <Col md={11} key={idx} className="mb-4 mx-3">
                        <Card>
                            <div className="ratio ratio-16x9">
                                <iframe
                                    src={video.url}
                                    title={video.title}
                                    allowFullScreen
                                    style={{ border: 0 }}
                                />
                            </div>
                            <Card.Body>
                                <Card.Title>{video.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Videos;