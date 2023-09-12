import { Button, Modal } from 'react-bootstrap';

export function DeleteTimerDialog() {
  return (
    <Modal show={false} centered>
      <Modal.Header closeButton>
        <Modal.Title>Timer</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you really want to delete the timer?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="danger">Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}
