import styles from "../styles/Welcome.module.scss";
import { useApiContext } from "../context/DataContext";
import { useAuth } from '../context/AuthContext';

const Welcome = () => {
  const { apiData } = useApiContext();
  const { username } = useAuth();

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
        <h2>Welcome {username}!</h2>
        <p>Live matches: {matches}</p>
      </div>
    </>
  );
};

export default Welcome;