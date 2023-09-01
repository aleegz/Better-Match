import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Live from '../components/Live';
import Today from '../components/Today'

const landing = () => {
  return (
    <>
      <Home />
      <Live />
      <Today />
    </>
  )
}

export default landing;