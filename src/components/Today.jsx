import React, { useEffect, useState } from "react";
import styles from "../styles/Today.module.scss";
import TeamImage from "../components/img/TeamImg.jsx";
import dateHour from "./dateHour.js";
import xdate from "./xdate.js";
import today from './todayDate.js';
import data from "../data/matches3.json";
import NavBar from "./NavBar.jsx";
import useApi from "../services/useApi.js";

const Today = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loading, data } = useApi(
    `https://v3.football.api-sports.io/fixtures?date=${
      xdate().date
    }&status=NS&timezone=America/Argentina/Buenos_Aires`
  );

  if (loading)
    return (
      <div className={styles.spinContainer}>
        <div className={styles.spinner}></div>
      </div>
    );

  if (data.response.length === 0) {
    {
      console.error(data.errors);
    }
    return (
      <div className={styles.error} id="todaySection">
        No data available
      </div>
    );
  }

  const matches = data.response
    .filter((match) => dateHour(match) >= xdate().hour.toString())
    .slice(0, 10);

  return (
    <div id="todaySection">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />

      <div className={styles.container}>
        <span className={styles.separator}></span>

        <div className={styles.title}>
          <h1>
            Today's Matches{" "}
            <span className="material-symbols-outlined" translate="no">
              today
            </span>
          </h1>
          <p>{today()}</p>
        </div>

        {matches.map((match, index) => (
          <div key={index}>
            <div className={styles.match}>
              <div className={styles.leagueTime}>
                <h4 translate="no">{match.league.name}</h4>
              </div>

              <div className={styles.matchInfo}>
                <div className={styles.dateMatch}>
                  <div className={styles.home}>
                    <div className={styles.homeLogo}>
                      <img src={match.teams.home.logo} />
                      <p translate="no">{match.teams.home.name}</p>
                    </div>
                  </div>

                  <div className={styles.away}>
                    <div className={styles.awayLogo}>
                      <TeamImage teamId={match.teams.away.id} />
                      <p translate="no">{match.teams.away.name}</p>
                    </div>
                  </div>
                </div>
                <p>{dateHour(match)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Today;
