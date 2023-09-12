import React from 'react';
import ReactDOM from 'react-dom/client';
import { Container } from 'react-bootstrap';
import { Header } from './components/Header';
import { TimerList } from './components/TimerList';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <Header />
      <Container>
        <TimerList />
      </Container>
    </>
  </React.StrictMode>
);
