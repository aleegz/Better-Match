import styles from "../styles/Account.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import A from "../assets/images/logos/A-VA_02.png";

const Account = () => {
  const { username } = useAuth();
  const email = "you@gmail.com";
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className={styles.container}>
        <div className={styles.data}>
          <h3>Your account</h3>
          <h5>
            <span className="material-symbols-outlined">account_circle</span>
            Username: {username} 
          </h5>
          <h5>
            <span className="material-symbols-outlined">mail</span>Email:{" "}
            {email}
          </h5>
          <Link to={`/login`}>
            <button type="submit" className={styles.btn}>
              Log out <span className="material-symbols-outlined">logout</span>
            </button>
          </Link>
        </div>
        <div className={styles.footer}>
          <img src={A} alt="Alejandro Gómez logo" className={styles.a} />
          <span translate="no">
            Developed by <a href="https://github.com/7AleGz">Alejandro Gómez</a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Account;
