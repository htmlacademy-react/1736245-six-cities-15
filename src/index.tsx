import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { PLACES_TO_STAY } from './services/constants';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App placesToStay={PLACES_TO_STAY} />
  </React.StrictMode>
);
