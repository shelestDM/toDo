import React from "react";

import Navigation from "./Navigation";
import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={styles["main-header"]}>
      <h1>React Advanced</h1>
      <Navigation
        isLoggedIn={props.isAuthenticated}
      />
    </header>
  );
};

export default MainHeader;
