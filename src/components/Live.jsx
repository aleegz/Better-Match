import React, { useEffect, useState } from "react";
import styles from "../styles/Live.module.scss";
import TeamImage from "../components/img/TeamImg.jsx";
import Modal from "../components/Modal.jsx";
import err from "../assets/images/details/err.svg";
//import apiData from "../data/matches5.json";
//import apiData from '../data/match_1052306/match_events.json';
import apiData from '../data/match_1126166/match.json';
import { useApiContext } from "../context/DataContext";

const Live = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);
  const { apiData } = useApiContext();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!apiData)
    return (
      <div className={styles.spinContainer}>
        <div className={styles.spinner}></div>
      </div>
    );

  if (!apiData.results || apiData.length === 0) {
    {
      console.error(apiData.errors.requests);
    }
    return (
      <div className={styles.error} id="titleSection">
        <h1>404 Error</h1>
        <p>Not found..</p>
        <img src={err} alt="" />
      </div>
    );
  }

  const openModal = (match) => {
    setSelectedMatch(match);
  };

  const closeModal = () => {
    setSelectedMatch(null);
  };

  const matches = apiData.response;

  return (
    <div id="titleSection">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
      />

      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            Live Matches{" "}
            <span className="material-symbols-outlined" translate="no">
              live_tv
            </span>
          </h1>
        </div>

        {matches.map((match, index) => (
          <div key={index}>
            <div className={styles.match} onClick={() => openModal(match)}>
              <div className={styles.leagueTime}>
                <h4 translate="no">{match.league.name}</h4>
                <span>
                  <p>
                    {match.fixture.status.short == "HT"
                      ? match.fixture.status.long
                      : match.fixture.status.elapsed + "'"}
                  </p>
                  <div className={styles.indeterminateProgressBar}>
                    <div
                      className={styles.indeterminateProgressBarProgress}
                    ></div>
                  </div>
                </span>
              </div>

              <div className={styles.home}>
                <div className={styles.homeLogo}>
                  <div>
                    {/* <TeamImage teamId={match.teams.home.id} /> */}
                    <img src={match.teams.home.logo} />
                  </div>

                  <p translate="no">{match.teams.home.name}</p>
                </div>
                {match.goals.home}
                {match.score.penalty.home
                  ? ` (${match.score.penalty.home})`
                  : ""}
              </div>

              <div className={styles.away}>
                <div className={styles.awayLogo}>
                  <div>
                    {/* <TeamImage teamId={match.teams.away.id} /> */}
                    <img src={match.teams.away.logo} />
                  </div>
                  <p translate="no">{match.teams.away.name}</p>
                </div>
                {match.goals.away}
                {match.score.penalty.away
                  ? ` (${match.score.penalty.away})`
                  : ""}
              </div>
            </div>
          </div>
        ))}
        {selectedMatch && (
          <Modal
            isOpen={true}
            onClose={closeModal}
            selectedMatch={selectedMatch}
          />
        )}
      </div>
    </div>
  );
};

export default Live;
