import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

import MatchDetails from '../src/pages/MatchDetails.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Better-Match">
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
    {/* <MatchDetails></MatchDetails> */}
  </React.StrictMode>,
)