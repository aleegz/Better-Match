import React from 'react';
import Home from '../components/Home';
import Live from '../components/Live';
import Today from '../components/Today';
import Footer from '../components/Footer';

const landing = () => {
  return (
    <>
      <Home />
      <Live />
      <Today />
      <Footer />
    </>
  )
}

export default landing;