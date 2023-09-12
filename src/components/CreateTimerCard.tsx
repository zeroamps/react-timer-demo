import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { EditTimerDialog } from './EditTimerDialog';

export function CreateTimerCard() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="bg-yellow-100 mt-3 border-yellow-300 text-center">
        <Card.Body>
          <Button className="w-md-50 w-100" variant="success" size="lg" onClick={() => setShow(true)}>
            Create a new timer
          </Button>
        </Card.Body>
      </Card>
      <EditTimerDialog show={show} />
    </>
  );
}
