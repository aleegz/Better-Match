import React from "react";
import MatchDetails from "./matchDetails/MatchDetails";
import { DataProvider } from "../context/DataContext";

const details = () => {
  return (
    <>
      <DataProvider>
        <MatchDetails />
      </DataProvider>
    </>
  );
};

export default details;
