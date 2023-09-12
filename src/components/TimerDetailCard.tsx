import { Button, Card } from 'react-bootstrap';
import { Timer } from '../domains';

type Props = {
  timer: Timer;
};

export function TimerDetailCard({ timer }: Props) {
  return (
    <Card className="bg-100 mt-3 border-300">
      <Card.Header className="border-bottom border-300">{timer.name}</Card.Header>
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
      <Card.Footer className="d-flex gap-1 justify-content-end p-1 border-top border-300">
        <Button className="fs-8 px-3 p-0" variant="success" size="sm">
          Edit
        </Button>
        <Button className="fs-8 px-3 p-0" variant="danger" size="sm">
          Delete
        </Button>
      </Card.Footer>
    </Card>
  );
}

{
  /* <Card className="bg-green-100 mt-3 border border-green-300">
  <Card.Header className="border-bottom border-green-300">Birthday</Card.Header>
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
  <Card.Footer className="d-flex gap-1 justify-content-end p-1 border-top border-green-300">
    <Button className="fs-8 px-3 p-0" variant="success" size="sm">
      Edit
    </Button>
    <Button className="fs-8 px-3 p-0" variant="danger" size="sm">
      Delete
    </Button>
  </Card.Footer>
</Card>; */
}
