/*import React, { createContext, useContext, useState, useEffect } from 'react';
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
}*/

/*import React, { createContext, useContext, useState, useEffect } from 'react';
import useApi from '../services/useApi.js';

const DataContext = createContext();

export function useApiContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const { loading, apiData } = useApi('https://v3.football.api-sports.io/fixtures?live=all');
  const { loading: loading2, apiData: apiData2 } = useApi(`https://v3.football.api-sports.io/fixtures?date=2023-09-05&status=NS&timezone=America/Argentina/Buenos_Aires`);
  
  useEffect(() => {
    if (!loading && apiData) {
      setApiData1(apiData);
    }
  }, [loading, apiData]);
  
  useEffect(() => {
    if (!loading2 && apiData2) {
      setApiData2(apiData2);
    }
  }, [loading2, apiData2]);
  

  return (
    <DataContext.Provider value={{ apiData, apiData2 }}>
      {children}
    </DataContext.Provider>
  );
}*/

import React, { createContext, useContext, useState, useEffect } from 'react';
import useApi from '../services/useApi.js';

const DataContext = createContext();

export function useApiContext() {
  return useContext(DataContext);
}

export function DataProvider({ children }) {
  const { loading, data: apiData } = useApi('https://v3.football.api-sports.io/fixtures?live=all');
  const { loading: loading2, data: apiData2 } = useApi(`https://v3.football.api-sports.io/fixtures?date=2023-09-05&status=NS&timezone=America/Argentina/Buenos_Aires`);
  
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    if (!loading && apiData) {
      setData1(apiData);
    }
  }, [loading, apiData]);
  
  useEffect(() => {
    if (!loading2 && apiData2) {
      setData2(apiData2);
    }
  }, [loading2, apiData2]);

  return (
    <DataContext.Provider value={{ data1, data2 }}>
      {children}
    </DataContext.Provider>
  );
}