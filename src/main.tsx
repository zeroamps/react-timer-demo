import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from 'react-bootstrap/Button';
import './styles.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <h1 className="display-1">Hello, World!</h1>
      <Button>Click ok me!</Button>
    </>
  </React.StrictMode>
);
