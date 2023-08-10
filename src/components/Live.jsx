import React from "react";
import useApi from '../services/useApi';
import LeagueImage from "../components/img/LeagueImg.jsx";
import TeamImage from "../components/img/TeamImg.jsx";
import VenueImage from "../components/img/VenueImg.jsx";
//import matches from '../data/matches.json'
import styles from '../styles/Live.module.scss'

const Live = () => {
    const { loading, data } = useApi('https://v3.football.api-sports.io/fixtures?live=all');

    if(loading) return <h1>Loading</h1>

    if (!data.results || data.length === 0) {
        {console.error(data.errors.requests)}
        return <div>No hay datos disponibles</div>;
    };

    //const partidos = matches.response; 
    const partidos = data.response;

  return (
    <div className={styles.container}>
      <h1>Live Matches</h1>
      {partidos.map((partido, index) => (
              <div key={index}>
                <div className={styles.match}>
                    <h2>Liga: {partido.league.name}</h2>
                    <LeagueImage leagueId={partido.league.id} />
                    <p>
                    {partido.teams.home.name} {partido.goals.home} vs{" "}
                    {partido.goals.away} {partido.teams.away.name}
                    </p>
                    <TeamImage teamId={partido.teams.home.id} />
                    <TeamImage teamId={partido.teams.away.id} />
                    <h3>Estadio: {partido.fixture.venue.name}</h3>
                    <VenueImage venueId={partido.fixture.venue.id} />
                </div>
                  
              </div>
          ))}
    </div>
  );
};

export default Live;