import styles from "../styles/PlayerEvent.module.scss";
import out from "../assets/images/substitutes/out.svg";
import ball from "../assets/images/ball.svg";
import redBall from "../assets/images/redBall.svg";

function PlayerEvent({ player, events }) {
  const playerEvent = events.find(
    (event) => event.player.id === player.player.id || event.detail === "Own Goal" ? event.player.id === player.player.id : event.type === "subst" ? event.assist.id === player.player.id : null
  );

  if (!playerEvent) {
    return null;
  }

  return (
    <div>
      {playerEvent.type === "Card" ? (
        playerEvent.detail === "Yellow Card" ? (
          <span className={styles.yellowCard}></span>
        ) : (
          <span className={styles.redCard}></span>
        )
      ) : playerEvent.type === "Goal" ? (
        playerEvent.detail === "Normal Goal" ? (
          <img src={ball} className={styles.ball} />
        ) : playerEvent.detail === "Own Goal" ? (
          <img src={redBall} className={styles.redBall} />
        ) : null
      ) : playerEvent.type == "subst" ? (
        <img src={out} className={styles.out} />
      ) : null}
    </div>
  );
}

export default PlayerEvent;
