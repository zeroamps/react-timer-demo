import { Button, Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onClose: () => void;
};

export function TimerDeleteDialog({ show, onClose }: Props) {
  return (
    <Modal show={show} centered onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Timer</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you really want to delete the timer?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={onClose}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
