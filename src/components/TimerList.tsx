import { useEffect, useState } from 'react';
import { TimerDetailCard } from './TimerDetailCard';
import { TimerCreateCard } from './TimerCreateCard';
import { useTimersReducer } from '../hooks/useTimersReducer';

export function TimerList() {
  const [timers, dispatch] = useTimersReducer();
  const [, setRefreshTime] = useState(new Date());

  useEffect(() => {
    dispatch({ type: 'reload' });
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshTime(new Date());
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const timerDetailCards = timers.map((timer) => <TimerDetailCard key={timer.id} timer={timer} dispatch={dispatch} />);

  return (
    <div className="my-3 pt-px-64">
      <TimerCreateCard dispatch={dispatch} />
      {timerDetailCards}
    </div>
  );
}
