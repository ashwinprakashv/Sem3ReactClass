import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

function App() {
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  return (
    <Container style={{ height: '100vh' }} className="d-flex align-items-center justify-content-center">
      <Row>
        <Col md={12}>
          {showAlert && <Alert variant="success">Login Successfull</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className="fw-bold">Username</Form.Label>
              <Form.Control type="text" placeholder="Enter username" required className="mb-3"/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label className="fw-bold">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Log In
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
