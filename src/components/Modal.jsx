import React from 'react';
import styles from '../styles/Modal.module.scss';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose, children, selectedMatch }) => {
  
  console.log("Modal is open:", isOpen);
  
  if (!isOpen) return null;

  const key = selectedMatch.fixture.id;
  
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer}>
        
      <div className={styles.modalContent}>
        <div className={styles.modalButton}>
          
          <span className={styles.minute}>
            <p>{selectedMatch.fixture.status.short == "HT" ? selectedMatch.fixture.status.long : selectedMatch.fixture.status.elapsed + "'"}</p>
            <div className={styles.indeterminateProgressBar}>
              <div className={styles.indeterminateProgressBarProgress}></div>
            </div>
          </span>

          <button className={styles.closeButton} onClick={onClose}>
            <span className="material-symbols-outlined" translate="no">close</span>
          </button>
        </div>

          
        <div className={styles.matchDetails}>

        <div className={styles.leagueLogo}>
          <img src={selectedMatch.league.logo} alt="" />
          <h4 translate="no">{selectedMatch.league.name}</h4>
        </div>

        <div className={styles.stadium}>
          <h5 translate="no">{selectedMatch.fixture.venue.name}</h5>
          <img src={selectedMatch.league.flag ? selectedMatch.league.flag : selectedMatch.teams.home.logo} alt="country flag" />
        </div>

          <div className={styles.matchDetailsTeams}>

            <div className={styles.matchDetailsTeamsHome}>
              <img className={styles.leagueLogoImg} src={selectedMatch.teams.home.logo} alt="Home Team Logo" />
              <p translate="no">{selectedMatch.teams.home.name}</p>
              <b>
                {selectedMatch.goals.home}
                {selectedMatch.score.penalty.home ? ` (${selectedMatch.score.penalty.home})` : ""}
              </b>
            </div>

            <p>vs</p> 

            <div className={styles.matchDetailsTeamsAway}>
              <img className={styles.leagueLogoImg} src={selectedMatch.teams.away.logo} alt="Away Team Logo" />
              <p translate="no">{selectedMatch.teams.away.name}</p>
              <b>
                {selectedMatch.goals.away}
                {selectedMatch.score.penalty.away ? ` (${selectedMatch.score.penalty.away})` : ""}
              </b>
            </div>

          </div>
          {children}
        </div>
        <Link to={`/matchdetails/${key}`}>View More</Link>
      </div>
      </div>
    </div>
    
    </>
  );
};

export default Modal;
