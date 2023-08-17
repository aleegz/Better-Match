import React from "react";
import { useState } from "react";
import styles from "../styles/Live.module.scss";
import { Link } from "react-router-dom";
import useApi from "../services/useApi";
import LeagueImage from "../components/img/LeagueImg.jsx";
import TeamImage from "../components/img/TeamImg.jsx";
import VenueImage from "../components/img/VenueImg.jsx";
import matches from "../data/matches2.json";
import Modal from "../components/Modal.jsx";

const Live = () => {
  const [selectedPartido, setSelectedPartido] = useState(null);

  const openModal = (partido) => {
    setSelectedPartido(partido);
  };

  const closeModal = () => {
    setSelectedPartido(null);
  };

  // const time = (partido)=>{
  //   (partido.fixture.status.short == "HT") ? partido.fixture.status.long
  //   || (partido.fixture.status.short == "ET") ? partido.fixture : partido.fixture.status.elapsed + "'";
  // }

  const { loading, data } = useApi('https://v3.football.api-sports.io/fixtures?live=all');

  if(loading) 
    return (
      <div className={styles.spinContainer}>
        <div className={styles.spinner}></div>
      </div>
        
    )

    if (!data.results || data.length === 0) {
        {console.error(data.errors.requests)}
        return <div>No hay datos disponibles</div>;
    };

  const partidos = data.response;
  //const partidos = matches.response;

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
            <span className="material-symbols-outlined" translate="no">live_tv</span>
          </h1>
        </div>

        {partidos.map((partido, index) => (
          <div key={index}>
            <div className={styles.match} onClick={() => openModal(partido)}>
              <div className={styles.leagueTime}>
                <h4>{partido.league.name}</h4>
                <span>
                  <b>
                    {partido.fixture.status.short == "HT"
                      ? partido.fixture.status.long
                      : partido.fixture.status.elapsed + "'"}
                  </b>
                </span>
              </div>

              <div className={styles.home}>
                <div className={styles.homeLogo}>
                  <TeamImage teamId={partido.teams.home.id} />
                  {partido.teams.home.name}
                </div>
                {partido.goals.home}
                {partido.score.penalty.home
                  ? ` (${partido.score.penalty.home})`
                  : ""}
              </div>

              <div className={styles.away}>
                <div className={styles.awayLogo}>
                  <TeamImage teamId={partido.teams.away.id} />
                  {partido.teams.away.name}
                </div>
                {partido.goals.away}
                {partido.score.penalty.away
                  ? ` (${partido.score.penalty.away})`
                  : ""}
              </div>
            </div>
          </div>
        ))}
        {selectedPartido && (
          <Modal
            isOpen={true}
            onClose={closeModal}
            selectedPartido={selectedPartido}
          />
        )}
      </div>
    </div>
  );
};

export default Live;
