import React from "react";
import styles from "../styles/PlayerEvent.module.scss";
import out from "../assets/images/events/substitutes/out.svg";
import ball from "../assets/images/events/ball.svg";
import redBall from "../assets/images/events/redBall.svg";

const PlayerEvent = ({ events, player }) => {
  const playerEvents = events.filter(
    (event) => event.player.id === player.player.id
  );

  const eventElements = playerEvents.map((event) => {
    if (event.type === "Card") {
      return event.detail === "Yellow Card" ? (
        <span className={styles.yellowCard}></span>
      ) : (
        <span className={styles.redCard}></span>
      );
    } else if (event.type === "Goal") {
      return event.detail === "Normal Goal" ? (
        <img src={ball} className={styles.ball} />
      ) : (
        <img src={redBall} className={styles.redBall} />
      );
    } else if (event.type === "subst") {
      return (
      <img src={out} className={styles.out} />
      );
    } else {
      return null;
    }
  });

  return <div>{eventElements}</div>;
};

export default PlayerEvent;

/*function PlayerEvent({ player, events }) {
  const playerEvent = events.find((event) =>
    event.player.id === player.player.id || event.detail === "Own Goal"
      ? event.player.id === player.player.id
      : event.type === "subst"
      ? event.assist.id === player.player.id
      : null
  );

  if (!playerEvent) {
    return null;
  }

  return (
    <>
      <div>
        {playerEvent.type === "Card" ? (
          playerEvent.detail === "Yellow Card" ? (
            <span className={styles.yellowCard}></span>
          ) : (
            <span className={styles.redCard}></span>
          )
        ) : null}
      </div>
      <div>
        {playerEvent.type === "Goal" ? (
          playerEvent.detail === "Normal Goal" ? (
            <img src={ball} className={styles.ball} />
          ) : (
            <img src={redBall} className={styles.redBall} />
          )
        ) : null}
      </div>
      <div>
        {playerEvent.type === "subst" ? (
          <img src={out} className={styles.out} />
        ) : null}
      </div>
    </>
  );
}*/
