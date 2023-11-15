import React from 'react';
import InitialHome from './home/InitialHome';
import Footer from '../components/Footer';
//import Intro from '../pages/home/Intro'; developing

const initial = () => {
  return (
    <>
      <InitialHome />
      <Footer />
      {/* <Intro /> developing*/}
    </>
  )
}

export default initial;