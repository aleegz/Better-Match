import React, { useEffect, useState } from "react";
import styles from "../styles/MatchDetails.module.scss";
import { useParams } from "react-router-dom";
import VenueImg from "../components/img/VenueImg";
import ball from "../assets/images/events/ball.svg";
import redBall from "../assets/images/events/redBall.svg";
import substitution from "../assets/images/events/substitution.svg";
import stadium from "../assets/images/details/stadium.svg";
import map from "../assets/images/details/map.svg";
import referee from "../assets/images/details/referee.svg";
import err from "../assets/images/details/err.svg";
import Lineups from "../components/Lineups.jsx";
//import apiData from "../data/matches8.json";
//import apiData from '../data/match_1052306/match_events.json';
import apiData from '../data/match_1126166/match.json';
import { useApiContext } from "../context/DataContext";

const MatchDetails = () => {
  const { id } = useParams();
  const { apiData } = useApiContext();
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setShowSpinner(false);
    }, 2000);
  }, []);

  if (showSpinner) {
    return (
      <div className={styles.spinContainer}>
        <div className={styles.spinner}></div>
      </div>
    );
  }

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
      <div className={styles.error}>
        <h1>404 Error</h1>
        <span>No data available..</span>
        <img src={err} alt="" />
      </div>
    );
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
      return event.detail === "Yellow Card" ? (
        <span className={styles.yellowCard}></span>
      ) : (
        <span className={styles.redCard}></span>
      );
    } else if (event.type === "Goal") {
      return event.detail === "Own Goal" ? (
        <img src={redBall} className={styles.ball} />
      ) : (
        <img src={ball} className={styles.ball} />
      );
    } else {
      return <img src={substitution} />;
    }
  };

  return (
    <>
      <div className={styles.container}>
        {/* <p>Match details with ID: {id}</p> */}

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

            <p className={styles.scoreDate}>{selectedMatch.goals.home}</p>

            <span className={styles.scoreDate}>:</span>

            <p className={styles.scoreDate}>{selectedMatch.goals.away}</p>

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

        {
          events.length === 0 ? (
            <div className={styles.noEvents}>
              <img src={err} />
              <h3>
                <b>No event data available yet..</b>
              </h3>
            </div>
          ) : (
            <div className={styles.events}>
              {events.map((event, index) => (
                <div key={index}>
                  <div
                    className={
                      selectedMatch.teams.away.name === event.team.name
                        ? styles.right
                        : styles.left
                    }
                  >
                    <div
                      className={
                        selectedMatch.teams.away.name === event.team.name
                          ? styles.minutePlayerR
                          : styles.minutePlayerL
                      }
                    >
                      <p>{event.time.elapsed + event.time.extra + "'"}</p>
                      <div>
                        <p>{event.player.name}</p>

                        <p>
                          {event.type === "subst" ? event.assist.name : null}
                        </p>
                      </div>
                    </div>

                    <div className={styles.eventType}>{eventClass(event)}</div>
                  </div>
                </div>
              ))}
            </div>
          )
        }

        <div className={styles.league}>
          <div className={styles.leagueLogo}>
            <img src={selectedMatch.league.logo} alt="" />
            <h3 translate="no">{selectedMatch.league.name}</h3>
          </div>
          <p>{selectedMatch.league.round}</p>
        </div>

        <div className={styles.stadium}>
          {selectedMatch.fixture.venue.id ? (
            <VenueImg venueId={selectedMatch.fixture.venue.id} />
          ) : null}
          <div translate="no">
            {selectedMatch.fixture.venue.name ? (
              <div className={styles.stadiumIcon}>
                <img src={stadium} alt="Stadium icon" />
                <p>{selectedMatch.fixture.venue.name}</p>
              </div>
            ) : null}
            {selectedMatch.fixture.venue.city ? (
              <div className={styles.stadiumLocation}>
                <img src={map} alt="Map icon" />
                <p>{selectedMatch.fixture.venue.city}</p>
              </div>
            ) : null}

            {selectedMatch.fixture.referee ? (
              <div className={styles.stadiumReferee}>
                <img src={referee} alt="Referee icon" />
                <p>{selectedMatch.fixture.referee}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className={styles.matchPrediction}>
          <h3>¿Who will win?</h3>
          <div className={styles.options}>
            <button>{selectedMatch.teams.home.name}</button>
            <button>Tie</button>
            <button>{selectedMatch.teams.away.name}</button>
          </div>
        </div>

        <Lineups id={id} events={events} />
      </div>
    </>
  );
};

export default MatchDetails;
