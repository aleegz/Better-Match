import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchData } from "../services/api";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then((apiData) => {
        setData(apiData.response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};