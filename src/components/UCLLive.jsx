import React from "react";
import useApi from "../services/useApi";

const UCLLive = ({ apiUrl }) => {
  const { loading, data } = useApi()

    if(loading) return <h1>Loading</h1>
  
    if (!data || data.length === 0) {
      return <div>No hay datos disponibles</div>;
    }
  
    return (
      <div>
        <h1>UEFA CHAMPIONS LEAGUE</h1>
      </div>
    );
};

export default UCLLive;