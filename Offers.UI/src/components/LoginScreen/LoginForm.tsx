import React, {useReducer } from 'react';
import { Alert, Button } from "react-bootstrap";
import { FieldErrors, useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';

import { useAuthState, authReducer } from '../../context/Authentication/Authentication';
import { SET_IS_AUTHENTICATED_SUCCESS } from '../../context/Authentication/authentication-constants';

import {login} from './login-service';

type FormData = {
    username: string;
    password: string;
};

export const LoginForm: React.FC = () => {

  const { register, setValue, handleSubmit, errors } = useForm<FormData>();

  const authState = useAuthState();
  const [,dispatch] = useReducer(authReducer, authState);

  const history = useHistory();
  const onSubmit = handleSubmit(({username, password }) => {
    login(username, password)
      .then((someCookie: any) => {
        dispatch({type: SET_IS_AUTHENTICATED_SUCCESS, value: {authCookie: someCookie, isAuthenticated: true}});
      }).then(() => {
        // home
        history.push('/')
      })
      .catch(() => {console.log("some error");})
  });

  return (
    <>
      <LoginFormErrors errors={errors} />

      <form className="login-form" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            name="username"
            id="username"
            onChange={e => setValue("username", e.target.value)}
            ref={register({
              required: "Please enter username",
            })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            name="password"
            id="password"
            onChange={e => setValue("password", e.target.value)}
            ref={register({
              required: "Please enter password",
            })}
          />
        </div>

        <a className="forgotten-password-link" href="#">
          Forgotten Password?
        </a>
        <Button variant="primary" type="submit" className="login-button">
          Log in
        </Button>
      </form>
    </>
  );
};

const LoginFormErrors: React.FC<FieldErrors> = ({ errors }) => {
  return (
    <>
      {errors?.username && (
        <Alert variant="danger">
          <i className="fas fa-exclamation-circle"></i> Please enter username
        </Alert>
      )}
      {errors?.password && (
        <Alert variant="danger">
          <i className="fas fa-exclamation-circle"></i> Please enter password
        </Alert>
      )}
    </>
  );
};
