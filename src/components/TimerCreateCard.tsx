import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { TimerEditDialog } from './TimerEditDialog';
import { TimersReducerAction } from '../hooks/useTimersReducer';

type Props = {
  dispatch: React.Dispatch<TimersReducerAction>;
};

export function TimerCreateCard({ dispatch }: Props) {
  const [show, setShow] = useState(false);

  function handleSaveTimer() {
    dispatch({ type: 'create', name: 'Lorem Ipsum', target: new Date(2024, 1, 1) });
    setShow(false);
  }

  return (
    <>
      <Card className="bg-yellow-100 mt-3 border-yellow-300 text-center">
        <Card.Body>
          <Button className="w-md-50 w-100" variant="success" size="lg" onClick={() => setShow(true)}>
            Create a new timer
          </Button>
        </Card.Body>
      </Card>
      <TimerEditDialog show={show} onClose={() => setShow(false)} onSave={handleSaveTimer} />
    </>
  );
}
