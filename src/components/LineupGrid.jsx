import styles from "../styles/LineupGrid.module.scss";
import PlayerEvent from '../components/PlayerEvent.jsx'

const LineupGrid = ({ n, data, events }) => {
  const formation = data.response[n].formation.split("-").map(Number);
  const startXI = data.response[n].startXI;

  if (formation.length === 3) {
    const [defenders, midfielders, forwards] = formation.map(Number);

    const goalkeeperArray = startXI.filter(
      (player) => player.player.pos === "G"
    );
    const defendersArray = startXI
      .filter((player) => player.player.pos === "D")
      .slice(0, defenders);
    const midfieldersArray = startXI
      .filter((player) => player.player.pos === "M")
      .slice(0, midfielders);
    const forwardsArray = startXI
      .filter((player) => player.player.pos === "F")
      .slice(0, forwards);

    const lineup = [
      ...goalkeeperArray,
      ...defendersArray,
      ...midfieldersArray,
      ...forwardsArray,
    ];

    return (
      <div
        className={styles.lineup}
        style={
          n === 0
            ? { flexDirection: "column" }
            : { flexDirection: "column-reverse" }
        }
      >
        <div className={styles.gk}>
          {goalkeeperArray.map((player) => (
            <div
              key={player.player.id}
              className={styles.ply}
              style={
                n === 0 ? { margin: "0 0 .7em 0" } : { margin: ".7em 0 0 0" }
              }
            >
              <div
                className={styles.point}
                style={{
                  background:
                    "#" + data.response[n].team.colors.goalkeeper.primary,
                  color: "#" + data.response[n].team.colors.goalkeeper,
                  border:
                    "1px solid #" +
                    data.response[n].team.colors.goalkeeper.border,
                }}
              >
                {player.player.number}
                <PlayerEvent player={player} events={events} />
              </div>
              <span className={styles.name}>
                {player.player.name.split(" ")[1]
                  ? player.player.name.split(" ")[1]
                  : player.player.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.defenders}>
          {defendersArray.map((player) => (
            
            <div key={player.player.id} className={styles.ply}>
              <div
                className={styles.point}
                style={{
                  background: "#" + data.response[n].team.colors.player.primary,
                  color: "#" + data.response[n].team.colors.player.number,
                  border:
                    "1px solid #" +
                    data.response[n].team.colors.goalkeeper.border,
                }}
              >
                {player.player.number}
                <PlayerEvent player={player} events={events} />
              </div>
              <span className={styles.name}>
                {player.player.name.split(" ")[1]
                  ? player.player.name.split(" ")[1]
                  : player.player.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.mid}>
          {midfieldersArray.map((player) => (
            <div key={player.player.id} className={styles.ply}>
              <div
                className={styles.point}
                style={{
                  background: "#" + data.response[n].team.colors.player.primary,
                  color: "#" + data.response[n].team.colors.player.number,
                  border:
                    "1px solid #" +
                    data.response[n].team.colors.goalkeeper.border,
                }}
              >
                {player.player.number}
                <PlayerEvent player={player} events={events} />
              </div>
              <span className={styles.name}>
                {player.player.name.split(" ")[1]
                  ? player.player.name.split(" ")[1]
                  : player.player.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.forwards}>
          {forwardsArray.map((player) => (
            <div key={player.player.id} className={styles.ply}>
              <div
                className={styles.point}
                style={{
                  background: "#" + data.response[n].team.colors.player.primary,
                  color: "#" + data.response[n].team.colors.player.number,
                  border:
                    "1px solid #" +
                    data.response[n].team.colors.goalkeeper.border,
                }}
              >
                {player.player.number}
                <PlayerEvent player={player} events={events} />
              </div>
              <span className={styles.name}>
                {player.player.name.split(" ")[1]
                  ? player.player.name.split(" ")[1]
                  : player.player.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    const [defenders, holdingMidfielders, midfielders, forwards] =
      formation.map(Number);

    const goalkeeperArray = startXI.filter(
      (player) => player.player.pos === "G"
    );
    const defendersArray = startXI
      .filter((player) => player.player.pos === "D")
      .slice(0, defenders);
    const holdingMidfieldersArray = startXI
      .filter((player) => player.player.pos === "M")
      .slice(0, holdingMidfielders);
    const midfieldersArray = startXI
      .filter((player) => player.player.pos === "M")
      .slice(holdingMidfielders, midfielders + holdingMidfielders);
    const forwardsArray = startXI
      .filter((player) => player.player.pos === "F")
      .slice(0, forwards);

    const lineup = [
      ...goalkeeperArray,
      ...defendersArray,
      ...holdingMidfieldersArray,
      ...midfieldersArray,
      ...forwardsArray,
    ];

    console.log(lineup);

    return (
      <div
        className={styles.lineup}
        style={
          n === 0
            ? { flexDirection: "column" }
            : { flexDirection: "column-reverse" }
        }
      >
        <div className={styles.gk}>
          {goalkeeperArray.map((player) => (
            <div
              key={player.player.id}
              className={styles.ply}
              style={
                n === 0 ? { margin: "0 0 .7em 0" } : { margin: ".7em 0 0 0" }
              }
            >
              <div
                className={styles.point}
                style={{
                  background:
                    "#" + data.response[n].team.colors.goalkeeper.primary,
                  color: "#" + data.response[n].team.colors.goalkeeper,
                  border:
                    "1px solid #" +
                    data.response[n].team.colors.goalkeeper.border,
                }}
              >
                {player.player.number}
                <PlayerEvent player={player} events={events} />
              </div>
              <span className={styles.name}>
                {player.player.name.split(" ")[1]
                  ? player.player.name.split(" ")[1]
                  : player.player.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.defenders}>
          {defendersArray.map((player) => (
            <div key={player.player.id} className={styles.ply}>
              <div
                className={styles.point}
                style={{
                  background: "#" + data.response[n].team.colors.player.primary,
                  color: "#" + data.response[n].team.colors.player.number,
                  border:
                    "1px solid #" +
                    data.response[n].team.colors.goalkeeper.border,
                }}
              >
                {player.player.number}
                <PlayerEvent player={player} events={events} />
              </div>
              <span className={styles.name}>
                {player.player.name.split(" ")[1]
                  ? player.player.name.split(" ")[1]
                  : player.player.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.holding}>
          {holdingMidfieldersArray.map((player) => (
            <div key={player.player.id} className={styles.ply}>
              <div
                className={styles.point}
                style={{
                  background: "#" + data.response[n].team.colors.player.primary,
                  color: "#" + data.response[n].team.colors.player.number,
                  border:
                    "1px solid #" +
                    data.response[n].team.colors.goalkeeper.border,
                }}
              >
                {player.player.number}
                <PlayerEvent player={player} events={events} />
              </div>
              <span className={styles.name}>
                {player.player.name.split(" ")[1]
                  ? player.player.name.split(" ")[1]
                  : player.player.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.mid}>
          {midfieldersArray.map((player) => (
            <div key={player.player.id} className={styles.ply}>
              <div
                className={styles.point}
                style={{
                  background: "#" + data.response[n].team.colors.player.primary,
                  color: "#" + data.response[n].team.colors.player.number,
                  border:
                    "1px solid #" +
                    data.response[n].team.colors.goalkeeper.border,
                }}
              >
                {player.player.number}
                <PlayerEvent player={player} events={events} />
              </div>
              <span className={styles.name}>
                {player.player.name.split(" ")[1]
                  ? player.player.name.split(" ")[1]
                  : player.player.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
        <div className={styles.forwards}>
          {forwardsArray.map((player) => (
            <div key={player.player.id} className={styles.ply}>
              <div
                className={styles.point}
                style={{
                  background: "#" + data.response[n].team.colors.player.primary,
                  color: "#" + data.response[n].team.colors.player.number,
                  border:
                    "1px solid #" +
                    data.response[n].team.colors.goalkeeper.border,
                }}
              >
                {player.player.number}
                <PlayerEvent player={player} events={events} />
              </div>
              <span className={styles.name}>
                {player.player.name.split(" ")[1]
                  ? player.player.name.split(" ")[1]
                  : player.player.name.split(" ")[0]}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default LineupGrid;
