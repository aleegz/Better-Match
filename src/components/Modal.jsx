import React from 'react';
import styles from '../styles/Modal.module.scss';
import { Link } from 'react-router-dom';

const Modal = ({ isOpen, onClose, children, selectedPartido }) => {
  
  console.log("Modal is open:", isOpen);
  
  if (!isOpen) return null;

  const key = selectedPartido.fixture.id;
  
  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContainer}>
        
      <div className={styles.modalContent}>
        <div className={styles.modalButton}>
          
          <span className={styles.minute}>
            <p>{selectedPartido.fixture.status.short == "HT" ? selectedPartido.fixture.status.long : selectedPartido.fixture.status.elapsed + "'"}</p>
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
          <img src={selectedPartido.league.logo} alt="" />
          <h4 translate="no">{selectedPartido.league.name}</h4>
        </div>

        <div className={styles.stadium}>
          <h5 translate="no">{selectedPartido.fixture.venue.name}</h5>
          <img src={selectedPartido.league.flag ? selectedPartido.league.flag : selectedPartido.teams.home.logo} alt="country flag" />
        </div>

          <div className={styles.matchDetailsTeams}>

            <div className={styles.matchDetailsTeamsHome}>
              <img className={styles.leagueLogoImg} src={selectedPartido.teams.home.logo} alt="Home Team Logo" />
              <p translate="no">{selectedPartido.teams.home.name}</p>
              <b>
                {selectedPartido.goals.home}
                {selectedPartido.score.penalty.home ? ` (${selectedPartido.score.penalty.home})` : ""}
              </b>
            </div>

            <p>vs</p> 

            <div className={styles.matchDetailsTeamsAway}>
              <img className={styles.leagueLogoImg} src={selectedPartido.teams.away.logo} alt="Away Team Logo" />
              <p translate="no">{selectedPartido.teams.away.name}</p>
              <b>
                {selectedPartido.goals.away}
                {selectedPartido.score.penalty.away ? ` (${selectedPartido.score.penalty.away})` : ""}
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
