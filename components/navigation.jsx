import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Navigation component
const Navigation = ({ onNavClick }) => {
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CPAN144</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link 
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("home");
              }}>
              Home
            </Nav.Link>

            <Nav.Link 
              href="#video"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("video");
              }}>
              Videos
            </Nav.Link>

            <Nav.Link 
              href="#image"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("images");
              }}>
              Images
            </Nav.Link>

            <Nav.Link 
              href="#tasks"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("tasks");
              }}>
              Tasks
            </Nav.Link>

            <Nav.Link 
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                onNavClick("events");
              }}>
              Events
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navigation;