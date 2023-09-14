import { useEffect } from 'react';
import { TimerDetailCard } from './TimerDetailCard';
import { TimerCreateCard } from './TimerCreateCard';
import { useTimersReducer } from '../hooks/useTimersReducer';

export function TimerList() {
  const [timers, dispatch] = useTimersReducer();

  useEffect(() => {
    dispatch({ type: 'reload' });
  }, [dispatch]);

  const timerDetailCards = timers.map((timer) => <TimerDetailCard key={timer.id} timer={timer} dispatch={dispatch} />);

  return (
    <>
      <TimerCreateCard dispatch={dispatch} />
      {timerDetailCards}
    </>
  );
}
