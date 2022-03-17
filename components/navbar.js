import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
const NavBar = () => {
  return (
    <nav className={styles.container}>
      <Link href="/">
        <a className={styles.navBtn}>Home</a>
      </Link>
      <Link href="/guide">
        <a className={styles.navBtn}>Guide</a>
      </Link>
    </nav>
  );
};

export default NavBar;
