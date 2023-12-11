import styles from "../styles/Register.module.scss";
import { Link } from "react-router-dom";
import logo from "../assets/images/logos/better-match-logo-black.avif";

const Register = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
          <span translate="no">BETTER MATCH</span>
        </div>
        <div className={styles.form}>
          <form action="#" className={styles.registerForm}>
            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="password" placeholder="Password" />
            <button type="submit" className={styles.btn}>
              Submit
            </button>
            <p className={styles.message}>
              Already registered? <Link to={`/login`}> Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
