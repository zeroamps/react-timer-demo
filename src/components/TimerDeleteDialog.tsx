import { Button, Modal } from 'react-bootstrap';

type Props = {
  onClose: () => void;
  onDelete: () => void;
};

export function TimerDeleteDialog({ onClose, onDelete }: Props) {
  return (
    <Modal show={true} centered onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Timer</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you really want to delete the timer?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
