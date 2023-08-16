import React from "react";
import { useState } from 'react'
import styles from "../styles/Today.module.scss";
import { Link } from 'react-router-dom';
import useApi from '../services/useApi';
import LeagueImage from "../components/img/LeagueImg.jsx";
import TeamImage from "../components/img/TeamImg.jsx";
import matches from "../data/matches3.json";
import Modal from '../components/Modal.jsx';
import date from '../components/date.js'

const Today = () => {
  const [selectedPartido, setSelectedPartido] = useState(null);

  const openModal = (partido) => {
    setSelectedPartido(partido);
  };

  const closeModal = () => {
    setSelectedPartido(null);
  };

    const date = new Date();
    const months = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    const months2 = new Array ("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre");
    const days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    const days2 = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
    const today = (days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear());
    const today2 = (days[date.getDay()] + ", " + date.getDate() + " de " + months[date.getMonth()] + " de " + date.getFullYear());

    let dateyymmdd = new Date();
    let d = dateyymmdd.getDate();
    let m = dateyymmdd.getMonth() + 1;
    const xdate = [dateyymmdd.getFullYear(), (m < 10) ? '0' + m : m, (d < 10) ? '0' + d : d].join('-');

    const dateHour = (partido)=> {
    const fechaHoraUtc = new Date(partido.fixture.date);

    const options = { timeZone: 'America/Argentina/Buenos_Aires', hour: '2-digit', minute: '2-digit' };
    const formatter = new Intl.DateTimeFormat('es-AR', options);
    const fechaHoraFormateada = formatter.format(fechaHoraUtc);
    return fechaHoraFormateada;
    }

  const { loading, data } = useApi(`https://v3.football.api-sports.io/fixtures?date=${xdate}&status=NS&timezone=America/Argentina/Buenos_Aires`);
  

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
    <div id="todaySection">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
 
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Today's Matches <span className="material-symbols-outlined">today</span></h1>
          <p>{today}</p>
        </div>

        {partidos.map((partido, index) => (
          <div key={index}>
            <div className={styles.match} onClick={() => openModal(partido)}>

            <div className={styles.leagueTime}>
              <h4>{partido.league.name}</h4>
            </div>

            <div className={styles.matchInfo}>

                <div className={styles.dateMatch}>
                <div className={styles.home}>
                    <div className={styles.homeLogo}>
                    <TeamImage teamId={partido.teams.home.id} />
                    {partido.teams.home.name}
                    </div>
                </div>

                <div className={styles.away}>
                    <div className={styles.awayLogo}>
                    <TeamImage teamId={partido.teams.away.id} />
                    {partido.teams.away.name}
                    </div>
                </div>
                </div>

                <p>{dateHour(partido)}</p>

            </div>

            </div>
              {/* {selectedPartido && (
                <Modal isOpen={true} onClose={closeModal}>
                  <div className={styles.matchInfo}>
                    
                    <h2>Match Details</h2>
                    <LeagueImage leagueId={partido.league.id} />
                    <p>{selectedPartido.teams.home.name} vs {selectedPartido.teams.away.name}</p>

                  </div>
                </Modal>
              )} */}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Today;