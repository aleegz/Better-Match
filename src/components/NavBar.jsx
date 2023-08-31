import React from 'react';
import styles from '../styles/NavBar.module.scss';
import ButtonWithSidebar from '../components/ButtonWithSidebar';
import logo from '../assets/images/better-match-logo-black.avif';

const NavBar = () => {
  return (
    <div>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" /> 
            <span translate='no'>BETTER MATCH</span>
          </div>
          <ButtonWithSidebar />
        </nav>
    </div>
  )
}

/* https://raw.githubusercontent.com/7AleGz/Better-Match/master/public/better-match-logo-black.avif */

export default NavBar;