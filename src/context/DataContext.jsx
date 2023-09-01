import React, { createContext, useContext, useState, useEffect } from 'react';
import useApi from '../services/useApi.js';

const DataContext = createContext();

export function useApiContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const { loading, data } = useApi('https://v3.football.api-sports.io/fixtures?live=all');
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    if (!loading && data) {
      setApiData(data);
    }
  }, [loading, data]);

  return (
    <DataContext.Provider value={{ apiData }}>
      {children}
    </DataContext.Provider>
  );
}