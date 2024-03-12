import React from "react";
import styles from "../home/Introduction.module.scss";
import { Link } from "react-router-dom";
import smartphone from "../../../screenshots/smartphone_2.png";

const introduction = () => {
  return (
    <>
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
              {/* <a href="/home">GET STARTED!</a> */}
              <Link className={styles.gsBtn} to={`/login`}>GET STARTED!</Link>
              <Link className={styles.trBtn} to={`/home`}>Technical Review</Link>
            </div>
            <img src={smartphone} />
          </div>
        </div>
      </div>
    </>
  );
};

export default introduction;
