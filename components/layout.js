import React from "react";
import NavBar from "./navBar";
import styles from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main className={styles.mainContainer}>{children}</main>
    </div>
  );
};

export default Layout;
