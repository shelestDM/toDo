import React, { useState, useReducer } from "react";

import Card from "../UI/Card/Card";
import styles from "./Login.module.css";
import Button from "../UI/Button/Button";


const emailReducer = (email, action) => {
  switch (action.type) {
    case 'changed': {
      return {
        value: action.value,
        isValid: action.value.includes("@")
      }
    }
    case 'blur': {
      return {
        value: email.value,
        isValid: email.value.includes("@")
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const passwordReducer = (password, action) => {
  switch (action.type) {
    case 'changed': {
      return {
        value: action.value,
        isValid: action.value.trim().length > 6
      }
    }
    case 'blur': {
      return {
        value: password.value,
        isValid: password.value.trim().length > 6
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}


const Login = (props) => {
  
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmailState] = useReducer(emailReducer, { value: '', isValid: true });

  const [passwordState, dispatchPasswordState] = useReducer(passwordReducer, { value: '', isValid: true });

  const emailChangeHandler = (event) => {
    dispatchEmailState({
      type: 'changed',
      value: event.target.value
    });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPasswordState({
      type: 'changed',
      value: event.target.value
    })

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    dispatchEmailState({
      type: 'blur',
    });
  };

  const validatePasswordHandler = () => {
    dispatchPasswordState({
      type: 'blur',
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${styles.control} ${emailState.isValid === false ? styles.invalid : ""
            }`}
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${styles.control} ${passwordState.isValid === false ? styles.invalid : ""
            }`}
        >
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={styles.actions}>
          <Button type="submit" className={styles.btn} disabled={!formIsValid}>
            Вход
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
