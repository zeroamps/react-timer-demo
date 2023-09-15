import { Container, Navbar } from 'react-bootstrap';

export function Header() {
  return (
    <Navbar className="bg-primary" fixed="top">
      <Container>
        <Navbar.Brand className="text-uppercase text-white mx-auto">React Timer Demo</Navbar.Brand>
      </Container>
    </Navbar>
  );
}
