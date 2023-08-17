import React from 'react';
import styles from '../styles/Modal.module.scss';

const Modal = ({ isOpen, onClose, children, selectedPartido }) => {

  console.log("Modal is open:", isOpen);

  if (!isOpen) return null;

  return (
    <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent}>
        <div className={styles.modalButton}>
        <button className={styles.closeButton} onClick={onClose}>
          <span className="material-symbols-outlined" translate="no">close</span>
        </button>
        </div>


          
        <div className={styles.matchDetails}>
          <h2>Match Details</h2>

        <div className={styles.leagueLogo}>
          <img src={selectedPartido.league.logo} alt="" />
          <h4>{selectedPartido.league.name}</h4>
        </div>

          <div className={styles.matchDetailsTeams}>

            <div className={styles.matchDetailsTeamsHome}>
              <img src={selectedPartido.teams.home.logo} alt="Home Team Logo" />
              <p>{selectedPartido.teams.home.name}</p>
              <b>{selectedPartido.goals.home}</b>
            </div>

            <p>vs</p> 

            <div className={styles.matchDetailsTeamsAway}>
              <img src={selectedPartido.teams.away.logo} alt="Away Team Logo" />
              <p> {selectedPartido.teams.away.name}</p>
              <b>{selectedPartido.goals.away}</b>
            </div>

          </div>
          {children}
        </div>
            <a href="View More">View More</a>

      </div>
    </div>
    
    </>
  );
};

export default Modal;
