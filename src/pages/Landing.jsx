import React from "react";
import Live from "../components/Live";
import Today from "../components/Today";
import Footer from "../components/Footer";
import { DataProvider } from "../context/DataContext";

const landing = () => {
  return (
    <>
      <DataProvider>
        <Live />
        <Today />
        <Footer />
      </DataProvider>
    </>
  );
};

export default landing;
