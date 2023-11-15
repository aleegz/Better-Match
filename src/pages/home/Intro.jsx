// developing

import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <div className={styles.content}>
      <div className={styles.contentContainer}>
        <p className={styles.contentContainerTxt}><b>BetterMatch</b> is</p>

        <ul className={styles.contentContainerList}>
          <li className={styles.contentContainerListItem}>world !</li>
          <li className={styles.contentContainerListItem}>bob !</li>
          <li className={styles.contentContainerListItem}>users !</li>
          <li className={styles.contentContainerListItem}>everybody !</li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
