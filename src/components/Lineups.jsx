import React from "react";
import styles from "../styles/Lineups.module.scss";
import { useParams } from "react-router-dom";
import data from "../data/matches6.json";
//import field from '../assets/images/soccer-field.svg';
import err from '../assets/images/err.svg';
import field from "../assets/images/soccer-field-img.png";
import homeField from "../assets/images/home-soccer-field-img.png";
import awayField from "../assets/images/away-soccer-field-img.png";
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

  if (data.results === 0) {
    {
      console.error(data.errors.requests);
    }
    return (
      <div className={styles.error}>
        <h1>404 Error</h1>
        <span>No data available..</span>
        <img src={err} alt="" />
      </div>
    );
  }

  const homePlayers = data.response[0].startXI;
  const awayPlayers = data.response[1].startXI;
  const homePlyColors = data.response[0].team.colors.player; // add .primary or .number
  const awayPlyColors = data.response[1].team.colors.player;
  const homeGkColors = data.response[0].team.colors.goalkeeper;
  const awayGkColors = data.response[1].team.colors.goalkeeper;
  const homeNumColors = "#" + data.response[0].team.colors.player.number;
  const awayNumColors = "#" + data.response[1].team.colors.player.number;
  const homeLogo = data.response[0].team.logo;
  const awayLogo = data.response[1].team.logo;
  const [homeFirstName, homeLastName] = homePlayers[0].player.name.split(' ');
  const [awayFirstName, awayLastName] = awayPlayers[1].player.name.split(' ');
  console.log(data);

  return (
    <>
      <div className={styles.homeHeader}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={homeLogo}
            style={{ width: "auto", height: "1.5em", marginRight: ".3em" }}
          />
          <h3 translate="no">{data.response[0].team.name}</h3>
        </div>

        <p>{data.response[0].formation}</p>
      </div>

      <div className={styles.lineup}>
        <img src={field} className={styles.homeFieldImg} />

        <div className={styles.homeLineup}>
          <div className={styles.gk}>
            <div
              className={styles.point}
              style={{
                background: "#" + homeGkColors.primary,
                color: homeNumColors,
              }}
            >
              {homePlayers[0].player.number}
            </div>
            <span>{homePlayers[0].player.name}</span>
          </div>

          <div className={styles.def}>
            {homePlayers.map((player, index) =>
              player.player.pos === "D" ? (
                <div key={index} className={styles.ply}>
                  <div
                    className={styles.point}
                    style={{
                      background: "#" + homePlyColors.primary,
                      color: homeNumColors,
                    }}
                  >
                    {player.player.number}
                  </div>
                  <span>{player.player.name}</span>
                </div>
              ) : null
            )}
          </div>

          <div className={styles.mid}>
            {homePlayers.map((player, index) =>
              player.player.pos === "M" ? (
                <div key={index} className={styles.ply}>
                  <div
                    className={styles.point}
                    style={{
                      background: "#" + homePlyColors.primary,
                      color: homeNumColors,
                    }}
                  >
                    {player.player.number}
                  </div>
                  <span>{player.player.name}</span>
                </div>
              ) : null
            )}
          </div>

          <div className={styles.for}>
            {homePlayers.map((player, index) =>
              player.player.pos === "F" ? (
                <div key={index} className={styles.ply}>
                  <div
                    className={styles.point}
                    style={{
                      background: "#" + homePlyColors.primary,
                      color: homeNumColors,
                    }}
                  >
                    {player.player.number}
                  </div>
                  <span>{player.player.name}</span>
                </div>
              ) : null
            )}
          </div>
        </div>

        <div className={styles.awayLineup}>
          <div className={styles.for}>
            {awayPlayers.map((player, index) =>
              player.player.pos === "F" ? (
                <div key={index} className={styles.ply}>
                  <div
                    className={styles.point}
                    style={{
                      background: "#" + awayPlyColors.primary,
                      color: awayNumColors,
                    }}
                  >
                    {player.player.number}
                  </div>
                  <span>{player.player.name}</span>
                </div>
              ) : null
            )}
          </div>

          <div className={styles.mid}>
            {awayPlayers.map((player, index) =>
              player.player.pos === "M" ? (
                <div key={index} className={styles.ply}>
                  <div
                    className={styles.point}
                    style={{
                      background: "#" + awayPlyColors.primary,
                      color: awayNumColors,
                    }}
                  >
                    {player.player.number}
                  </div>
                  <span>{player.player.name}</span>
                </div>
              ) : null
            )}
          </div>

          <div className={styles.def}>
            {awayPlayers.map((player, index) =>
              player.player.pos === "D" ? (
                <div key={index} className={styles.ply}>
                  <div
                    className={styles.point}
                    style={{
                      background: "#" + awayPlyColors.primary,
                      color: awayNumColors,
                    }}
                  >
                    {player.player.number}
                  </div>
                  <span>{player.player.name}</span>
                </div>
              ) : null
            )}
          </div>

          <div className={styles.gk}>
            <div
              className={styles.point}
              style={{
                background: "#" + awayGkColors.primary,
                color: awayNumColors,
              }}
            >
              {awayPlayers[1].player.number}
            </div>
            <span>{}</span> 
          </div>
        </div>

        <div className={styles.awayHeader}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={awayLogo}
              style={{ width: "auto", height: "1.5em", marginRight: ".3em" }}
            />
            <h3 translate="no">{data.response[1].team.name}</h3>
          </div>

          <p>{data.response[1].formation}</p>
        </div>
      </div>
    </>
  );
};

export default Lineups;
