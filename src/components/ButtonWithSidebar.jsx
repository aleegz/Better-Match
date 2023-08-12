import React, { useState } from "react";
import styles from "../styles/ButtonWithSidebar.module.scss";
import { Link as ScrollLink } from "react-scroll";

const ButtonWithSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <div className={styles.buttonMenu}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0" />
      <button
        className={`${styles.toggleButton} ${isMenuOpen ? styles.open : ""}`}
        onClick={toggleMenu}>
        {isMenuOpen ? "✖" : "☰"}
      </button>
      <div className={`${styles.menu} ${isMenuOpen ? styles.open : ""}`}>
        <ul className={styles.menuList}>
          <li>
            <button onClick={toggleMenu}>
              Home
              <span className="material-symbols-outlined">home</span>
              </button>
          </li>
          <li>
            <ScrollLink to="titleSection" smooth={true} duration={500}>
              <button onClick={toggleMenu}>
                Live Matches
                <span className="material-symbols-outlined">live_tv</span>
                </button>
            </ScrollLink>
          </li>
            <img src="https://raw.githubusercontent.com/7AleGz/Better-Match/master/public/better-match-logo-transparent.avif" alt="" />
        </ul>
      </div>
    </div>
  );
};

export default ButtonWithSidebar;



{/*import React, { useState } from "react";
import styles from "../styles/ButtonWithSidebar.module.scss";

const ButtonWithSidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // ☰ X
  };

  return (

    <div className={styles.buttonMenu}>

      <button className={`${styles.toggleButton} ${styles.openButton}`} onClick={toggleMenu}>
        ☰
      </button>

      <div className={isMenuOpen ? `${styles.menu} ${styles.open}` : styles.menu}>

        <div className={styles.openMenuBtn}>
          <button className={`${styles.toggleButton} ${styles.closeButton}`} onClick={toggleMenu}>
            ✖
          </button>
        </div>
        
        <ul className={styles.menuList}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
  };

export default ButtonWithSidebar;

{/*
      {isMenuOpen ? (
        <button className={`${styles.toggleButton} ${styles.closeButton}`} onClick={toggleMenu}>
          ✖
        </button>
      ) : (
        <button className={`${styles.toggleButton} ${styles.openButton}`} onClick={toggleMenu}>
          ☰
        </button>
      )}
*/}