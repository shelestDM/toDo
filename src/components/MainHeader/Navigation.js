import React, { useContext } from "react";

import styles from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = () => {

  const context = useContext(AuthContext);

  return (
    <nav className={styles.nav}>
      <ul>
        {context.isLoggedInContext && (
          <li>
            <a href="/">Пользователи</a>
          </li>
        )}
        {context.isLoggedInContext && (
          <li>
            <a href="/">Админ</a>
          </li>
        )}
        {context.isLoggedInContext && (
          <li>
            <button onClick={context.onLogout}>Выйти</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
