import React from 'react';
import Home from './home/Home';
import Introduction from './home/Introduction';
import Footer from '../components/Footer';
//import Intro from '../pages/home/Intro'; developing

const initial = () => {
  return (
    <>
      <Home />
      <Introduction />
      <Footer />
      {/* <Intro /> developing*/}
    </>
  )
}

export default initial;