import React from 'react';
import styles from '../styles/NavBar.module.scss';

const NavBar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src="public\better-match-logo.avif" alt="Logo" />
            <span>BETTER MATCH</span>
          </div>

        </nav>
    </div>
  )
}

export default NavBar;