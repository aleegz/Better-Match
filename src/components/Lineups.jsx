import React from "react";
import styles from "../styles/Lineups.module.scss";
import { useParams } from "react-router-dom";
//import data from "../data/matches9.json";
//import data from "../data/match_1052306/match_lineups.json";
import data from "../data/match_1126166/match_lineups.json";
import err from "../assets/images/details/err.svg";
import field from "../assets/images/soccer-field-img.png";
import entry from "../assets/images/events/substitutes/in.svg";
import out from "../assets/images/events/substitutes/out.svg";
import ball from '../assets/images/events/ball.svg';
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

  if (data.results === 0 || !data.response[0].formation) {
    {
      console.error(data.errors.requests);
    }
    return (
      <div className={styles.error}>
        <img src={err} alt="" />
        <h2>No lineup data available..</h2>
      </div>
    );
  }

  function getEventsIds(events) {
    const goals = [];
    const yellowCards = [];
    const redCards = [];
    const substituteIn = [];
    const substituteOut = [];

    for (const event of events) {
      if (event.type === "Goal" && event.player.id) {
        goals.push(event.player.id);
      } else if (event.type === "Card" && event.player.id) {
        if (event.detail === "Yellow Card") {
          yellowCards.push(event.player.id);
        } else {
          redCards.push(event.player.id);
        }
      }
      if (event.type === "subst") {
        if (event.player.id) {
          substituteIn.push(event.player.id);
        }
        if (event.assist.id) {
          substituteOut.push(event.assist.id);
        }
      }
    }

    return { goals, yellowCards, redCards, substituteIn, substituteOut };
  }

  const { goals, yellowCards, redCards, substituteIn, substituteOut } =
    getEventsIds(events);
  console.log("Goals: " + goals);
  console.log("Yellow Cards: " + yellowCards);
  console.log("Red Cards: " + redCards);
  console.log("In: " + substituteIn);
  console.log("Out: " + substituteOut);

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
                  {player.player.name.split(" ")[1]
                    ? player.player.name.split(" ")[0][0] + ". "
                    : player.player.name.split(" ")[0]}
                  {player.player.name.split(" ")[1]
                    ? player.player.name.split(" ")[1].length < "4" &&
                      player.player.name.split(" ")[2]
                      ? player.player.name.split(" ")[1] +
                        " " +
                        player.player.name.split(" ")[2]
                      : player.player.name.split(" ")[1]
                    : null}
                </p>
                {goals.includes(player.player.id) ? (
                  <img
                    key={`goal-${index}`}
                    src={ball}
                    className={styles.ball}
                  />
                ) : null}
                {yellowCards.includes(player.player.id) ? (
                  <span
                    key={`card-${index}`}
                    className={styles.yellowCard}
                  ></span>
                ) : null}
                {redCards.includes(player.player.id) ? (
                  <span key={`card-${index}`} className={styles.redCard}></span>
                ) : null}
                {substituteIn.includes(player.player.id) ? (
                  <span>
                    <img src={entry} style={{ height: "1em" }} />
                  </span>
                ) : null}
                {substituteOut.includes(player.player.id) ? (
                  <span>
                    <img src={out} style={{ height: "1em" }} />
                  </span>
                ) : null}
              </div>
            ))}
          </div>
          <div className={styles.substitutesPlysAway}>
            {substitutesPlysAway.map((player, index) => (
              <div key={index}>
                {goals.includes(player.player.id) ? (
                  <img
                    key={`goal-${index}`}
                    src={ball}
                    className={styles.ball}
                  />
                ) : null}
                {yellowCards.includes(player.player.id) ? (
                  <span
                    key={`card-${index}`}
                    className={styles.yellowCard}
                  ></span>
                ) : null}
                {redCards.includes(player.player.id) ? (
                  <span key={`card-${index}`} className={styles.redCard}></span>
                ) : null}
                {substituteIn.includes(player.player.id) ? (
                  <span>
                    <img src={entry} style={{ height: "1em" }} />
                  </span>
                ) : null}
                {substituteOut.includes(player.player.id) ? (
                  <span>
                    <img src={out} style={{ height: "1em" }} />
                  </span>
                ) : null}
                <p className={styles.substitutesPlysAwayName}>
                  {player.player.name.split(" ")[1]
                    ? player.player.name.split(" ")[0][0] + ". "
                    : player.player.name.split(" ")[0]}
                  {player.player.name.split(" ")[1]
                    ? player.player.name.split(" ")[1].length < "4" &&
                      player.player.name.split(" ")[2]
                      ? player.player.name.split(" ")[1] +
                        " " +
                        player.player.name.split(" ")[2]
                      : player.player.name.split(" ")[1]
                    : null}
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
