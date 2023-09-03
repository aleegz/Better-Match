import React from 'react';
import styles from '../styles/NavBar.module.scss';
import ButtonWithSidebar from '../components/ButtonWithSidebar';
import logo from '../assets/images/better-match-logo-black.avif';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import ExtSidebar from '../components/ExtSidebar'

const NavBar = () => {

 const currentPath = useLocation();

  return (
    <div>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" /> 
            <span translate='no'>BETTER MATCH</span>
          </div>
          {currentPath.pathname == '/' ? <ButtonWithSidebar /> : <ExtSidebar />}
          
        </nav>
    </div>
  )
}

export default NavBar;