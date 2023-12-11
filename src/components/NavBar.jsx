import React from "react";
import styles from "../styles/NavBar.module.scss";
import ButtonWithSidebar from "../components/ButtonWithSidebar";
import ExtSidebar from "../components/ExtSidebar";
import logo from "../assets/images/logos/better-match-logo-black.avif";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const currentPath = useLocation();

  return currentPath.pathname == "/" || "/login" || "/register" ? null : (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
          <span translate="no">BETTER MATCH</span>
        </div>
        {currentPath.pathname == "/" ? (
          ""
        ) : currentPath.pathname == "/home" ? (
          <ButtonWithSidebar />
        ) : (
          <ExtSidebar />
        )}
        {/* {currentPath.pathname == '/home' ? <ButtonWithSidebar /> : <ExtSidebar />} */}
      </nav>
    </div>
  );
};

export default NavBar;
