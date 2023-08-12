import React from 'react';
import styles from '../styles/NavBar.module.scss';
import ButtonWithSidebar from '../components/ButtonWithSidebar';

const NavBar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src="dist\better-match-logo.avif" alt="Logo" />
            <span>BETTER MATCH</span>
          </div>
          <ButtonWithSidebar />
        </nav>
    </div>
  )
}

export default NavBar;