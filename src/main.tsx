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
        <div className="bg-yellow-100 mt-3 p-3 border border-1 border-yellow-300 rounded-3 text-center">
          <Button className="w-md-50 w-100" variant="success" size="lg">
            Create a new timer
          </Button>
        </div>
      </Container>
    </>
  </React.StrictMode>
);
