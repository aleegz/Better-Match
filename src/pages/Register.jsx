import { useState } from "react";
import styles from "../styles/Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logos/better-match-logo-black.avif";
import A from "../assets/images/logos/A-VA_02.png";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/home");
    } catch (error) {
      setError("Wrong email or password");
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0"
      />
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
          <span translate="no">BETTER MATCH</span>
        </div>
        <div className={styles.form}>
          <form onSubmit={handleSubmit} className={styles.registerForm}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
            <button type="submit" className={styles.btn}>
              Submit
            </button>
            {error && (
              <p className={styles.error}>
                <span className="material-symbols-outlined">info</span>
                {error}
              </p>
            )}

            <p className={styles.message}>
              Already registered? <Link to={`/login`}> Sign in</Link>
            </p>
          </form>
        </div>
        {/* <h1 style={{ fontFamily: "Arial", textAlign: "center"}}>Closed beta for now.. <br /> :(</h1> */}
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

export default Register;
