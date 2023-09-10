import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Container, Navbar } from 'react-bootstrap';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand className="text-uppercase text-white mx-auto">React Timer Demo</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <div className="bg-yellow-100 mt-3 p-3 border border-yellow-300 rounded-3 text-center">
          <Button className="w-md-50 w-100" variant="success" size="lg">
            Create a new timer
          </Button>
        </div>

        <div className="bg-100 p-3 mt-3 border rounded-3">
          <div className="fw-bold text-center text-uppercase">Birthday</div>
          <div className="d-flex gap-3 align-items-center justify-content-center">
            <div className="p-1 p-md-3 text-center">
              <div className="fs-3 fs-md-1">46</div>
              <div className="fs-9 fs-md-8">Days</div>
            </div>
            <div className="fs-1">:</div>
            <div className="p-1 p-md-3 text-center">
              <div className="fs-3 fs-md-1">12</div>
              <div className="fs-9 fs-md-8">Hours</div>
            </div>
            <div className="fs-1">:</div>
            <div className="p-1 p-md-3 text-center">
              <div className="fs-3 fs-md-1">35</div>
              <div className="fs-9 fs-md-8">Minutes</div>
            </div>
            <div className="fs-1">:</div>
            <div className="p-1 p-md-3 text-center">
              <div className="fs-3 fs-md-1">12</div>
              <div className="fs-9 fs-md-8">Seconds</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  </React.StrictMode>
);
