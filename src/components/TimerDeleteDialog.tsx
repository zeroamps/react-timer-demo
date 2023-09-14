import { Button, Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onClose: () => void;
  onDelete: () => void;
};

export function TimerDeleteDialog({ show, onClose, onDelete }: Props) {
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
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
