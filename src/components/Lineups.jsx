import React from 'react';
import styles from '../styles/Lineups.module.scss';
import apiData from '../data/matches6.json';

const players = apiData.response[0].startXI.player;
console.log(players)

export const Lineups = () => {
  return (
    <>
    {players.map((player, index)=> (
        <div key={index}>
        <p>{player.name}</p>
        </div>
    ))}
    <div className={styles.homeHeader}>
        <h3>PSG</h3> 
        <p>4-3-3</p>
    </div>

    <div className={styles.homeLineup}>
        <div className={styles.gk}>
            <div className={styles.point}>99</div>
            <span>Donnarumma</span>
        </div>

        <div className={styles.def}>
            <div className={styles.ply}>
                <div className={styles.point}>2</div>
                <span>A. Hakimi</span>
            </div>

            <div className={styles.ply}>
                <div className={styles.point}>15</div>
                <span>D. Pereira</span>
            </div>

            <div className={styles.ply}>
                <div className={styles.point}>37</div>
                <span>M. Škriniar</span>
            </div>

            <div className={styles.ply}>
                <div className={styles.point}>21</div>
                <span>Lucas</span>
            </div>
        </div>

        <div className={styles.mid}>
            <div className={styles.ply}>
                <div className={styles.point}>28</div>
                <span>C. Soler</span>
            </div>

            <div className={styles.ply}>
                <div className={styles.point}>33</div>
                <span>W. Zaire Emery</span>
            </div>

            <div className={styles.ply}>
                <div className={styles.point}>17</div>
                <span>Vitinha</span>
            </div>
        </div>

        <div className={styles.for}>

            <div className={styles.ply}>
                <div className={styles.point}>10</div>
                <span>Dembélé</span>
            </div>

            <div className={styles.ply}>
                <div className={styles.point}>9</div>
                <span>Goncalo Ramos</span>
            </div>

            <div className={styles.ply}>
                <div className={styles.point}>7</div>
                <span>K. Mbappé</span>
            </div>
        </div>
    </div>

    {/*<div className={styles.awayLineup}>
        
    </div>

    <div className={styles.awayHeader}>
        <h3>Niza</h3> 
        <p>4-3-3</p>
  </div>*/}
    </>
  )
}

export default Lineups;