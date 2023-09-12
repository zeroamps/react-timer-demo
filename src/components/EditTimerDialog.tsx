import { Button, Form, Modal } from 'react-bootstrap';

type Props = {
  show: boolean;
  onClose: () => void;
};

export function EditTimerDialog({ show, onClose }: Props) {
  return (
    <Modal show={show} centered onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Timer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTarget">
            <Form.Label>Target</Form.Label>
            <Form.Control type="text" placeholder="Enter target date and time" />
            <Form.Text className="fs-8 text-muted px-1">Use this input format: yyyy-MM-dd HH:mm:ss</Form.Text>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        <Button variant="success" onClick={onClose}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
