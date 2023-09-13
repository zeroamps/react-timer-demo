import { useState } from 'react';
import classNames from 'classnames';
import { Button, Card } from 'react-bootstrap';
import { Timer } from '../domains';
import { TimerEditDialog } from './TimerEditDialog';
import { TimerDeleteDialog } from './TimerDeleteDialog';

type Props = {
  timer: Timer;
};

export function TimerDetailCard({ timer }: Props) {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const finished = timer.target <= new Date();

  return (
    <Card className={classNames('mt-3', finished ? 'bg-green-100 border-green-300' : 'bg-100 border-300')}>
      <Card.Header className={classNames('border-bottom', finished ? 'border-green-300' : 'border-300')}>
        {timer.name}
      </Card.Header>
      <Card.Body>
        <div className="d-flex gap-3 align-items-center justify-content-center">
          <div className="p-1 p-md-3 text-center">
            <div className="fs-3 fs-md-1">46</div>
            <div className="fs-9 fs-md-8">Days</div>
          </div>
          <div className="fs-1">:</div>
          <div className="p-1 p-md-3 text-center">
            <div className="fs-3 fs-md-1">12</div>
            <div className="fs-9 fs-md-8">Hours</div>
          </div>
          <div className="fs-1">:</div>
          <div className="p-1 p-md-3 text-center">
            <div className="fs-3 fs-md-1">35</div>
            <div className="fs-9 fs-md-8">Minutes</div>
          </div>
          <div className="fs-1">:</div>
          <div className="p-1 p-md-3 text-center">
            <div className="fs-3 fs-md-1">12</div>
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
      <TimerEditDialog show={showEditDialog} onClose={() => setShowEditDialog(false)} />
      <TimerDeleteDialog show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} />
    </Card>
  );
}
