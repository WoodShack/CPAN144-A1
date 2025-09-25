import React from 'react';
import Card from 'react-bootstrap/Card';

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

        </div>
    );
};

export default Images;