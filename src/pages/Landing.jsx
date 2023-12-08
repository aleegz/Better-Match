import React from "react";
import Welcome from "../components/Welcome";
import Live from "../components/Live";
import Today from "../components/Today";
import Footer from "../components/Footer";
import { DataProvider } from "../context/DataContext";

const landing = () => {
  return (
    <>
      <DataProvider>
        <Welcome />
        <Live />
        <Today />
        <Footer />
      </DataProvider>
    </>
  );
};

export default landing;
