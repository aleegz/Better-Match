import React from "react";
import useApi from '../services/useApi';
import LeagueImage from "../components/img/LeagueImg.jsx";
import TeamImage from "../components/img/TeamImg.jsx";
import VenueImage from "../components/img/VenueImg.jsx";
import matches from "../data/matches.json";
import styles from "../styles/Live.module.scss";

const Live = () => {
  /*const { loading, data } = useApi('https://v3.football.api-sports.io/fixtures?live=all');

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

  const partidos = data.response;*/
  const partidos = matches.response;

  return (
    <div id="titleSection">
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Live Matches</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            viewBox="0 -960 960 960"
            width="48"
            fill="#fff"
          >
            <path d="m383-350 267-170-267-170v340Zm-53 230v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v80H330ZM140-260h680v-520H140v520Zm0 0v-520 520Z" />
          </svg>
        </div>

        {partidos.map((partido, index) => (
          <div key={index}>
            <div className={styles.match}>

            <div className={styles.leagueTime}>
              <h4>{partido.league.name}</h4>
              <span><b>{partido.fixture.status.elapsed + "'"}</b></span>
            </div>

              <div className={styles.home}>
                <div className={styles.homeLogo}>
                  <TeamImage teamId={partido.teams.home.id} />
                  {partido.teams.home.name}
                </div>
                {partido.goals.home}
              </div>

              <div className={styles.away}>
                <div className={styles.awayLogo}>
                  <TeamImage teamId={partido.teams.away.id} />
                  {partido.teams.away.name}
                </div>
                {partido.goals.away}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /*
<h2>League: {partido.league.name}</h2>
<LeagueImage leagueId={partido.league.id} />

<h3>Stadium: {partido.fixture.venue.name}</h3>
<VenueImage venueId={partido.fixture.venue.id} />
*/
}

export default Live;
