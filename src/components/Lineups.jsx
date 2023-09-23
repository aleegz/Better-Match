import React from "react";
import styles from "../styles/Lineups.module.scss";
import { useParams } from "react-router-dom";
import data from "../data/matches9.json";
import err from "../assets/images/err.svg";
import field from "../assets/images/soccer-field-img.png";
import field2 from "../assets/images/soccer-field.svg";
import entry from "../assets/images/substitutes/in.svg";
import out from "../assets/images/substitutes/out.svg";
import useApi from "../services/useApi.js";
import LineupGrid from "../components/LineupGrid.jsx";

export const Lineups = ({ events }) => {
  const { id } = useParams();
  const { loading, data } = useApi(
    `https://v3.football.api-sports.io/fixtures/lineups?fixture=${id}`
  );

  if (loading)
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
        <span>No lineup data available..</span>
        <img src={err} alt="" />
      </div>
    );
  }

  function getSubstituteIds(events) {
    const substituteIDs = [];

    for (const event of events) {
      if (event.type === "subst" && event.player.id) {
        substituteIDs.push(event.player.id);
      }
    }

    return substituteIDs;
  }

  const substituteIDs = getSubstituteIds(events);

  const homeFormation = data.response[0].formation;
  //console.log(+homeFormation[0]);
  const substitutesPlysHome = data.response[0].substitutes;
  const substitutesPlysAway = data.response[1].substitutes;

  return (
    <>
      <div className={styles.lineups}>
        <div className={styles.homeHeader}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={data.response[0].team.logo}
              style={{ width: "auto", height: "1.5em", marginRight: ".3em" }}
            />
            <h3 translate="no">{data.response[0].team.name}</h3>
          </div>

          <p>{data.response[0].formation}</p>
        </div>

        <div className={styles.lineup}>
          <img src={field} className={styles.fieldImg} />

          <div className={styles.homeLineup}>
            <LineupGrid n={0} data={data} events={events} />
          </div>

          <div className={styles.awayLineup}>
            <LineupGrid n={1} data={data} events={events} />
          </div>

          {/* <div className={styles.homeLineup}>

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
              <span>{homePlayers[0].player.name.split(" ")[1]}</span>
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

                    <span>{player.player.name.split(" ")[1] ? player.player.name.split(" ")[1] : player.player.name.split(" ")[0]}</span>

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
                    <span>{player.player.name.split(" ")[1] ? player.player.name.split(" ")[1] : player.player.name.split(" ")[0]}</span>
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
                    <span>{player.player.name.split(" ")[1] ? player.player.name.split(" ")[1] : player.player.name.split(" ")[0]}</span>
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
                    <span>{player.player.name.split(" ")[1] ? player.player.name.split(" ")[1] : player.player.name.split(" ")[0]}</span>
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
                    <span>{player.player.name.split(" ")[1] ? player.player.name.split(" ")[1] : player.player.name.split(" ")[0]}</span>
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
                    <span>{player.player.name.split(" ")[1] ? player.player.name.split(" ")[1] : player.player.name.split(" ")[0]}</span>
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
              <span>{awayPlayers[0].player.name.split(" ")[1]}</span>
            </div>
          </div> */}
        </div>

        <div className={styles.awayHeader}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={data.response[1].team.logo}
              style={{ width: "auto", height: "1.5em", marginRight: ".3em" }}
            />
            <h3 translate="no">{data.response[1].team.name}</h3>
          </div>

          <p>{data.response[1].formation}</p>
        </div>
      </div>

      <div className={styles.substitutes}>
        <div>
          <img
            src={data.response[0].team.logo}
            style={{ width: "auto", height: "1.5em", marginRight: ".3em" }}
          />
          <h2>Substitutes</h2>
          <img
            src={data.response[1].team.logo}
            style={{ width: "auto", height: "1.5em", marginRight: ".3em" }}
          />
        </div>

        <div className={styles.substitutesPlys}>
          <div className={styles.substitutesPlysHome}>
            {substitutesPlysHome.map((player, index) => (
              <div key={index}>
                <p className={styles.substitutesPlysNum}>
                  {player.player.number}
                </p>
                <p className={styles.substitutesPlysHomeName}>
                  {player.player.name.split(" ")[0][0] +
                    ". " +
                    player.player.name.split(" ")[1]}
                </p>
                {substituteIDs.includes(player.player.id) ? (
                  <span>
                    <img src={entry} style={{ height: "1em" }} />
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <div className={styles.substitutesPlysAway}>
            {substitutesPlysAway.map((player, index) => (
              <div key={index}>
                {substituteIDs.includes(player.player.id) ? (
                  <span>
                    <img src={entry} style={{ height: "1em" }} />
                  </span>
                ) : null}
                <p className={styles.substitutesPlysAwayName}>
                  {player.player.name.split(" ")[0][0] +
                    ". " +
                    player.player.name.split(" ")[1]}
                </p>
                <p className={styles.substitutesPlysNum}>
                  {player.player.number}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lineups;
