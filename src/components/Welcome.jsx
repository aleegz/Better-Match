import styles from "../styles/Welcome.module.scss";
import { useApiContext } from "../context/DataContext";

const Welcome = () => {
  const { apiData } = useApiContext();

  if (!apiData)
    return (
      <div className={styles.spinContainer}>
        <div className={styles.spinner}></div>
      </div>
    );

  const matches = apiData.results;

  return (
    <>
      <div className={styles.container}>
        <h2>Welcome!</h2>
        <p>Live matches: {matches}</p>
      </div>
    </>
  );
};

export default Welcome;