import React from 'react';
import styles from '../styles/MatchDetails.module.scss';
import { useParams } from 'react-router-dom';
import apiData from "../data/matches4.json";
import { useApiContext } from '../context/DataContext';

const MatchDetails = () => {
  const { id } = useParams();
  const { apiData } = useApiContext();

  if(!apiData) 
  return (
    <div className={styles.spinContainer}>
      <div className={styles.spinner}></div>
    </div>
      
  )

  if (!apiData.results || apiData.length === 0) {
      {console.error(apiData.errors.requests)}
      return <div>No hay datos disponibles</div>;
  };

  const partidos = apiData.response;

  const partidoEspecifico = partidos.find(partido => partido.fixture.id == id);

  if (!partidoEspecifico) {
    return (
      <div className={styles.container}>
        <p>No se encontró un partido con el ID: {id}</p>
      </div>
    )
  }

  return (
    <>
      <div className={styles.container}>
        <p>Detalles del partido con ID: {id}</p>

        <div className={styles.principalDetails}>

          <div className={styles.time}>
            <h3>{partidoEspecifico.fixture.status.short == "HT" ? partidoEspecifico.fixture.status.long : partidoEspecifico.fixture.status.elapsed + "'"}</h3>
          </div>
          <div className={styles.matchScore}>

            <div className={styles.homeTeam}>
              <img src={partidoEspecifico.teams.home.logo} alt="Home team logo" className={styles.homeLogo} />
              <p>{partidoEspecifico.teams.home.name}</p>
            </div>
            
            <p>{partidoEspecifico.goals.home}</p>

            <span>:</span>

            <p>{partidoEspecifico.goals.away}</p>

            <div className={styles.awayTeam}>
              <img src={partidoEspecifico.teams.away.logo} alt="Away team logo" className={styles.awayLogo} />
              <p>{partidoEspecifico.teams.away.name}</p>
            </div>
            
          </div>
        </div>

      </div>
    </>
  );
};

export default MatchDetails;