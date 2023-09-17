import React from 'react';
import styles from '../styles/Lineups.module.scss';
import { useParams } from "react-router-dom";
//import apiData from '../data/matches6.json';
//import field from '../assets/images/soccer-field.svg';
import field from '../assets/images/soccer-field-img.png';
import useApi from '../services/useApi.js';

export const Lineups = () => {
    const { id } = useParams();
    const { loading, data } = useApi(`https://v3.football.api-sports.io/fixtures/lineups?fixture=${id}`);

    if(loading) 
    return (
    <div className={styles.spinContainer}>
        <div className={styles.spinner}></div>
    </div>
    );

  if (!data) {
      {console.error(data.errors.requests)}
      return (
        <div className={styles.error}>No data available</div>
      );
  };

    const homePlayers = data.response[0].startXI;
    const awayPlayers = data.response[1].startXI;
    const homePlyColors = data.response[0].team.colors.player // add .primary or .number
    const awayPlyColors = data.response[1].team.colors.player
    const homeGkColors = data.response[0].team.colors.goalkeeper
    const awayGkColors = data.response[1].team.colors.goalkeeper
    const homeNumColors = '#' + data.response[0].team.colors.player.number
    const awayNumColors = '#' + data.response[1].team.colors.player.number
    //console.log(data);

  return (
    <>
    <div className={styles.homeHeader}>
        <h3>{data.response[0].team.name}</h3> 
        <p>{data.response[0].formation}</p>
    </div>

    <div className={styles.lineup}>
        <img src={field} className={styles.homeFieldImg} />

    <div className={styles.homeLineup}>
        <div className={styles.gk}>
            <div className={styles.point} style={{background: '#' + homeGkColors.primary, color: homeNumColors}}>{homePlayers[0].player.number}</div>
            <span>{homePlayers[0].player.name}</span>
        </div>

        <div className={styles.def}>
            {homePlayers.map((player, index)=> (
            player.player.pos === 'D' ?
            <div key={index} className={styles.ply}>
                <div className={styles.point} style={{background: '#' + homePlyColors.primary, color: homeNumColors}}>{player.player.number}</div>
                <span>{player.player.name}</span>
            </div>
            : null
            ))}
        </div> 

        <div className={styles.mid}>
            {homePlayers.map((player, index)=> (
            player.player.pos === 'M' ?
            <div key={index} className={styles.ply}>
                <div className={styles.point} style={{background: '#' + homePlyColors.primary, color: homeNumColors}}>{player.player.number}</div>
                <span>{player.player.name}</span>
            </div>
            : null
            ))}
        </div> 

        <div className={styles.for}>
            {homePlayers.map((player, index)=> (
            player.player.pos === 'F' ?
            <div key={index} className={styles.ply}>
                <div className={styles.point} style={{background: '#' + homePlyColors.primary, color: homeNumColors}}>{player.player.number}</div>
                <span>{player.player.name}</span>
            </div>
            : null
            ))}
        </div> 
    </div> 

    

    <div className={styles.awayLineup}>

        <div className={styles.for}>
            {awayPlayers.map((player, index)=> (
            player.player.pos === 'F' ?
            <div key={index} className={styles.ply}>
                <div className={styles.point} style={{background: '#' + awayPlyColors.primary, color: awayNumColors}}>{player.player.number}</div>
                <span>{player.player.name}</span>
            </div>
            : null
            ))}
        </div> 

        <div className={styles.mid}>
            {awayPlayers.map((player, index)=> (
            player.player.pos === 'M' ?
            <div key={index} className={styles.ply}>
                <div className={styles.point} style={{background: '#' + awayPlyColors.primary, color: awayNumColors}}>{player.player.number}</div>
                <span>{player.player.name}</span>
            </div>
            : null
            ))}
        </div> 

        <div className={styles.def}>
            {awayPlayers.map((player, index)=> (
            player.player.pos === 'D' ?
            <div key={index} className={styles.ply}>
                <div className={styles.point} style={{background: '#' + awayPlyColors.primary, color: awayNumColors}}>{player.player.number}</div>
                <span>{player.player.name}</span>
            </div>
            : null
            ))}
        </div> 

        <div className={styles.gk}>
            <div className={styles.point} style={{background: '#' + awayGkColors.primary, color: awayNumColors}}>{awayPlayers[1].player.number}</div>
            <span>{awayPlayers[1].player.name}</span>
        </div>

    </div>
        <div className={styles.awayHeader}>
            <h3>{data.response[1].team.name}</h3> 
            <p>{data.response[1].formation}</p>
        </div>
    </div> 

    </>
  )
}

export default Lineups;

    {/*players.map((player, index)=> (
        <div key={index} style={{background: colors}}>
        <p>{player.player.number}</p>
        <p>{player.player.name}</p>
        </div>
    ))

        : player.player.pos === 'M' ?
        <div key={index} className={styles.mid}>
            <div className={styles.point} style={{background: '#' + plyColors.primary, color: numColors}}>{player.player.number}</div>
            <span>{player.player.name}</span>
        </div> 
        : null






*/}