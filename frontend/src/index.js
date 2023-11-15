import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BucketsContextProvider } from './context/BucketContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BucketsContextProvider>
      <App />
    </BucketsContextProvider>
  </React.StrictMode>
);