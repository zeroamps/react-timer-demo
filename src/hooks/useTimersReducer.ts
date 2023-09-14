import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Timer } from '../domains';

const LOCAL_STORAGE_TIMERS_KEY = '07dd44f2-e492-4044-96a5-150062a8f559-timers';

export type TimersReducerAction =
  | { type: 'reload' }
  | { type: 'create'; name: string; target: Date }
  | { type: 'update'; id: string; name: string; target: Date }
  | { type: 'delete'; id: string };

export function useTimersReducer() {
  return useReducer(timersReducer, []);
}

function timersReducer(timers: Timer[], action: TimersReducerAction) {
  switch (action.type) {
    case 'reload': {
      const loadedTimers = localStorage.getItem(LOCAL_STORAGE_TIMERS_KEY);
      if (loadedTimers) {
        return JSON.parse(loadedTimers, (key, value) => {
          if (key === 'target') return new Date(value);
          return value;
        }) as Timer[];
      }
      return [];
    }

    case 'create': {
      const changedTimers = [...timers, { id: uuidv4(), name: action.name, target: action.target }];
      localStorage.setItem(LOCAL_STORAGE_TIMERS_KEY, JSON.stringify(changedTimers));
      return changedTimers;
    }

    case 'update': {
      const changedTimers = timers.map((timer) => {
        if (timer.id === action.id) {
          timer.name = action.name;
          timer.target = action.target;
        }
        return timer;
      });
      localStorage.setItem(LOCAL_STORAGE_TIMERS_KEY, JSON.stringify(changedTimers));
      return changedTimers;
    }

    case 'delete': {
      const changedTimers = timers.filter((timer) => timer.id !== action.id);
      localStorage.setItem(LOCAL_STORAGE_TIMERS_KEY, JSON.stringify(changedTimers));
      return changedTimers;
    }
  }
}
