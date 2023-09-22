import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { TimerEditDialog } from './TimerEditDialog';
import { TimersReducerAction } from '../hooks/useTimersReducer';

type Props = {
  dispatch: React.Dispatch<TimersReducerAction>;
};

export function TimerCreateCard({ dispatch }: Props) {
  const [show, setShow] = useState(false);

  function handleSaveTimer(name: string, target: Date) {
    dispatch({ type: 'create', name, target });
    setShow(false);
  }

  return (
    <>
      <Card className="bg-yellow-100 border-yellow-300 text-center">
        <Card.Body>
          <Button className="w-md-50 w-100" variant="success" size="lg" onClick={() => setShow(true)}>
            Create a new timer
          </Button>
        </Card.Body>
      </Card>
      {show && <TimerEditDialog onClose={() => setShow(false)} onSave={handleSaveTimer} />}
    </>
  );
}
