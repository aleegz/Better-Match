import React from 'react';
import styles from '../styles/Home.module.scss';
import { Link as ScrollLink } from "react-scroll";

const Home = () => {

  return (
    <div className="homeSection">
      <div className={styles.container}>
          <h1>WHERE NUMBERS TELL THE TALE</h1> 
          {/*Follow the Pace of the Matches*/}
          {/* <p>Step into a world where each number narrates a story. From goals and cards to minutes played, we provide you a comprehensive view of every match so you won't miss any detail.</p> */}
          {/*From the most prestigious fields to local stadiums, our application allows you to follow the pace of each match. Whether you're a die-hard fan or a casual viewer, we'll keep you updated on everything!*/}
          <ScrollLink to="titleSection" smooth={true} duration={500}>
          <button className={styles.button}>
              <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 384 512"><path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z"/></svg>
          </button>
          </ScrollLink>
      </div>
    </div>
  )
}

export default Home;