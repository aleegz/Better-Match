import React from 'react';
import styles from "../home/InitialHome.module.scss";
import { Link as ScrollLink } from "react-scroll";
import smartphone from "../../../screenshots/smartphone_2.png";

const initialHome = () => {
  return (
    <>
        <div className={styles.container}>
          <h1>WHERE NUMBERS TELL THE TALE</h1>
          <ScrollLink to="info" smooth={true} duration={700}>
            <button className={styles.button}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                viewBox="0 0 384 512"
              >
                <path d="M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z" />
              </svg>
            </button>
          </ScrollLink>
        </div>
      <div className="info">
        <div className={styles.info}>
          <h3>Follow the Pace of the Matches ⚽🎉</h3>
          <p>
            Step into a world where each number narrates a story. From goals and
            cards to minutes played, we provide you a comprehensive view of
            every match so you won't miss any detail.
          </p>
          <p>
            From the most prestigious fields to local stadiums, our application
            allows you to follow the pace of each match. Whether you're a
            die-hard fan or a casual viewer, we'll keep you updated on
            everything!
          </p>
          <div className={styles.useApp}>
            <div>
              <h4>DON'T MISS A RESULT</h4>
              <a href="home">GET STARTED!</a>
            </div>
            <img src={smartphone} />
          </div>
        </div>
      </div>
    </>
  );
};

export default initialHome;
