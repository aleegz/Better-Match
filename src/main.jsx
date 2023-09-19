import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
//import LineupsTeams from './components/LineupsTeams.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/Better-Match">
      <DataProvider>
        <App translate='no' />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
)