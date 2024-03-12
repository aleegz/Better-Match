import React from "react";
import styles from "../styles/Footer.module.scss";
import logo from "../assets/images/logos/better-match-logo-transparent.avif";
import A from "../assets/images/logos/A-VA_01.png";

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
      />
      <div className={styles.footer} translate="no">
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
          <p translate="no">BETTER MATCH</p>
        </div>
        <h2>About Project</h2>
        <div>
          <span className="material-symbols-outlined">arrow_right_alt</span>
          <a href="https://github.com/aleegz/Better-Match" target="_blank">
            Github <i className="fa fa-github"></i>
          </a>
        </div>

        <span className={styles.separator}></span>

        <img src={A} alt="Alejandro Gómez logo" className={styles.a} />
        <h4>@2023 Alejandro Gómez</h4>
      </div>
    </>
  );
};

export default Footer;
