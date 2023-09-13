import { TimerDetailCard } from './TimerDetailCard';
import { TimerCreateCard } from './TimerCreateCard';
import { Timer } from '../domains';

const timers: Timer[] = [
  { id: '1', name: 'Birthday', target: new Date(2024, 1, 1) },
  { id: '2', name: 'Birthday', target: new Date(2024, 1, 1) },
  { id: '3', name: 'Birthday', target: new Date(2024, 1, 1) }
];

export function TimerList() {
  const timerDetailCards = timers.map((timer) => <TimerDetailCard key={timer.id} timer={timer} />);

  return (
    <>
      <TimerCreateCard />
      {timerDetailCards}
    </>
  );
}
