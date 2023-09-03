import React from 'react';
import styles from '../styles/MatchDetails.module.scss';
import { useParams } from 'react-router-dom';
import VenueImg from '../components/img/VenueImg';
import apiData from "../data/matches4.json";
import { useApiContext } from '../context/DataContext';

const MatchDetails = () => {
  const { id } = useParams();
  /*const { apiData } = useApiContext();

  if(!apiData) 
  return (
    <div className={styles.spinContainer}>
      <div className={styles.spinner}></div>
    </div>
      
  )

  if (!apiData.results || apiData.length === 0) {
      {console.error(apiData.errors.requests)}
      return <div>No hay datos disponibles</div>;
  };*/

  const matches = apiData.response;

  const selectedMatch = matches.find(match => match.fixture.id == id);

  if (!selectedMatch) {
    return (
      <div className={styles.container}>
        <p>No match found with ID: {id}</p>
      </div>
    )
  }

  return (
    <>
      <div className={styles.container}>
        <p>Match details with ID: {id}</p>

        <div className={styles.principalDetails}>

          <div className={styles.time}>
            <h3 className={styles.minute}>{selectedMatch.fixture.status.short == "HT" ? selectedMatch.fixture.status.long : selectedMatch.fixture.status.elapsed + "'"}</h3>
            <div className={styles.indeterminateProgressBar}>
              <div className={styles.indeterminateProgressBarProgress}></div>
            </div>

          </div>
          <div className={styles.matchScore}>

            <div className={styles.homeTeam}>
              <img src={selectedMatch.teams.home.logo} alt="Home team logo" className={styles.homeLogo} />
              <p translate='no'>{selectedMatch.teams.home.name}</p>
            </div>
            
            <p>{selectedMatch.goals.home}</p>

            <span>:</span>

            <p>{selectedMatch.goals.away}</p>

            <div className={styles.awayTeam}>
              <img src={selectedMatch.teams.away.logo} alt="Away team logo" className={styles.awayLogo} />
              <p translate='no'>{selectedMatch.teams.away.name}</p>
            </div>
            
          </div>
        </div>

        <div className={styles.league}>
          <div className={styles.leagueLogo}>
            <img src={selectedMatch.league.logo} alt="" />
            <h3 translate='no'>{selectedMatch.league.name}</h3>
          </div>
          <p>{selectedMatch.league.round}</p>
        </div>

        <div className={styles.stadium}>
          <VenueImg venueId={selectedMatch.fixture.venue.id} />
          <p translate='no'>{selectedMatch.fixture.venue.name}, {selectedMatch.fixture.venue.city}</p>
          <p translate='no'>Referee {selectedMatch.fixture.referee}</p>
        </div>

      </div>

      {/* <div id="wg-api-football-game"
          data-host="v3.football.api-sports.io"
          data-key="  "
          data-id="718243"
          data-theme=""
          data-refresh="15"
          data-show-errors="false"
          data-show-logos="true">
      </div>
      <script
          type="module"
          src="https://widgets.api-sports.io/2.0.3/widgets.js">
      </script> */}

    </>
  );
};

export default MatchDetails;