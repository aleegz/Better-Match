import React, { useState } from "react";
import styles from "../styles/Login.module.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logos/better-match-logo-black.avif";
import A from "../assets/images/logos/A-VA_02.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "x" && password === "x") {
      navigate("/home");
    } else {
      setError("Wrong email or password");
    }
  };

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
          <form onSubmit={handleSubmit} className={styles.loginForm}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className={styles.btn}>
              Login
            </button>
            {error && (
              <p className={styles.error}>
                <span className="material-symbols-outlined">info</span>
                {error}
              </p>
            )}

            <p className={styles.message}>
              New User? <Link to={`/register`}> Create an account</Link>
            </p>
          </form>
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

export default Login;