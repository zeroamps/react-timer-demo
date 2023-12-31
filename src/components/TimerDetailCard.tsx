import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import classNames from 'classnames';
import dayjs from 'dayjs';
import durationPlugin from 'dayjs/plugin/duration';
dayjs.extend(durationPlugin);

import { TimerEditDialog } from './TimerEditDialog';
import { TimerDeleteDialog } from './TimerDeleteDialog';
import { TimersReducerAction } from '../hooks/useTimersReducer';
import { Timer } from '../domains';

type Props = {
  timer: Timer;
  dispatch: React.Dispatch<TimersReducerAction>;
};

export function TimerDetailCard({ timer, dispatch }: Props) {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const currentDateTime = new Date();
  const duration = dayjs.duration(timer.target.getTime() - currentDateTime.getTime());
  const finished = duration.asSeconds() < 1;

  function handleSaveTimer(name: string, target: Date) {
    dispatch({ type: 'update', id: timer.id, name, target });
    setShowEditDialog(false);
  }

  function handleDeleteTimer() {
    dispatch({ type: 'delete', id: timer.id });
    setShowDeleteDialog(false);
  }

  return (
    <Card className={classNames('mt-3', finished ? 'bg-green-100 border-green-300' : 'bg-100 border-300')}>
      <Card.Header className={classNames('border-bottom', finished ? 'border-green-300' : 'border-300')}>
        {timer.name}
      </Card.Header>
      <Card.Body>
        <div className="d-flex gap-3 align-items-center justify-content-center">
          <div className="p-1 p-md-3 text-center">
            <div className="fs-3 fs-md-1">{finished ? '0' : Math.trunc(duration.asDays())}</div>
            <div className="fs-9 fs-md-8">Days</div>
          </div>
          <div className="fs-1">:</div>
          <div className="p-1 p-md-3 text-center">
            <div className="fs-3 fs-md-1">{finished ? '00' : duration.hours().toString().padStart(2, '0')}</div>
            <div className="fs-9 fs-md-8">Hours</div>
          </div>
          <div className="fs-1">:</div>
          <div className="p-1 p-md-3 text-center">
            <div className="fs-3 fs-md-1">{finished ? '00' : duration.minutes().toString().padStart(2, '0')}</div>
            <div className="fs-9 fs-md-8">Minutes</div>
          </div>
          <div className="fs-1">:</div>
          <div className="p-1 p-md-3 text-center">
            <div className="fs-3 fs-md-1">{finished ? '00' : duration.seconds().toString().padStart(2, '0')}</div>
            <div className="fs-9 fs-md-8">Seconds</div>
          </div>
        </div>
      </Card.Body>
      <Card.Footer
        className={classNames(
          'd-flex gap-1 justify-content-end p-1 border-top',
          finished ? 'border-green-300' : 'border-300'
        )}>
        <Button className="fs-8 px-3 p-0" variant="success" size="sm" onClick={() => setShowEditDialog(true)}>
          Edit
        </Button>
        <Button className="fs-8 px-3 p-0" variant="danger" size="sm" onClick={() => setShowDeleteDialog(true)}>
          Delete
        </Button>
      </Card.Footer>
      {showEditDialog && (
        <TimerEditDialog
          name={timer.name}
          target={timer.target}
          onClose={() => setShowEditDialog(false)}
          onSave={handleSaveTimer}
        />
      )}
      {showDeleteDialog && (
        <TimerDeleteDialog onClose={() => setShowDeleteDialog(false)} onDelete={handleDeleteTimer} />
      )}
    </Card>
  );
}
