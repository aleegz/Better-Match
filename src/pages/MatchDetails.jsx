import React from "react";
import styles from "../styles/MatchDetails.module.scss";
import { useParams } from "react-router-dom";
import VenueImg from "../components/img/VenueImg";
import ball from '../assets/images/ball.svg';
import redBall from '../assets/images/redBall.svg';
import substitution from '../assets/images/substitution.svg';
import apiData from "../data/matches5.json";
import { useApiContext } from "../context/DataContext";

const MatchDetails = () => {
  const { id } = useParams();
  const { apiData } = useApiContext();

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
    return <div>No hay datos disponibles</div>;
  }

  const matches = apiData.response;
  const selectedMatch = matches.find((match) => match.fixture.id == id);
  const events = selectedMatch.events;
  console.log(events);

  if (!selectedMatch) {
    return (
      <div className={styles.container}>
        <p>No match found with ID: {id}</p>
      </div>
    );
  }

  const eventClass = (event) => {
    if (event.type === "Card") {
      return event.detail === "Yellow Card" 
      ? <span className={styles.yellowCard}></span>
      : <span className={styles.redCard}></span>
    } else if (event.type === "Goal") {
      return event.detail === "Own Goal" 
      ? <img src={redBall} className={styles.ball} />
      : <img src={ball} className={styles.ball} />
    } else {
      return <img src={substitution} />
    }
  };

  return (
    <>
      <div className={styles.container}>
        <p>Match details with ID: {id}</p>

        <div className={styles.principalDetails}>
          <div className={styles.time}>
            <h3 className={styles.minute}>
              {selectedMatch.fixture.status.short == "HT"
                ? selectedMatch.fixture.status.long
                : selectedMatch.fixture.status.elapsed + "'"}
            </h3>
            <div className={styles.indeterminateProgressBar}>
              <div className={styles.indeterminateProgressBarProgress}></div>
            </div>
          </div>
          <div className={styles.matchScore}>
            <div className={styles.homeTeam}>
              <img
                src={selectedMatch.teams.home.logo}
                alt="Home team logo"
                className={styles.homeLogo}
              />
              <p translate="no">{selectedMatch.teams.home.name}</p>
            </div>

            <p>{selectedMatch.goals.home}</p>

            <span>:</span>

            <p>{selectedMatch.goals.away}</p>

            <div className={styles.awayTeam}>
              <img
                src={selectedMatch.teams.away.logo}
                alt="Away team logo"
                className={styles.awayLogo}
              />
              <p translate="no">{selectedMatch.teams.away.name}</p>
            </div>
          </div>
        </div>

        <div className={styles.events}>
          {/* <span className={styles.line}></span> */}
          {events.map((event, index) => (
            <div key={index}>
              <div className={selectedMatch.teams.away.name === event.team.name ? styles.right : styles.left}>
            
                <div className={styles.minutePlayer}>
                  <p>{event.time.elapsed + event.time.extra + "'"}</p>
                  <p>{event.player.name}</p>
                </div>
                  
                <div className={styles.eventType}>
                  {eventClass(event)}
                </div>
                  
              </div>
            </div>
          ))}
        </div>

        <div className={styles.league}>
          <div className={styles.leagueLogo}>
            <img src={selectedMatch.league.logo} alt="" />
            <h3 translate="no">{selectedMatch.league.name}</h3>
          </div>
          <p>{selectedMatch.league.round}</p>
        </div>

        <div className={styles.stadium}>
          <VenueImg venueId={selectedMatch.fixture.venue.id} />
          <p translate="no">
            {selectedMatch.fixture.venue.name},{" "}
            {selectedMatch.fixture.venue.city}
          </p>
          <p translate="no">Referee {selectedMatch.fixture.referee}</p>
        </div>
      </div>
    </>
  );
};

export default MatchDetails;
